import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  getAllPublicaciones,
  getPublicacionById,
  deletePublicacion,
  createPublicacion,
  updatePublicacion,
} from '../src/services/publicacionService'

const API_URL = 'http://localhost:8080/api/v1/publicacion'

describe('publicacionService', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
    vi.spyOn(Storage.prototype, 'getItem')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getAllPublicaciones', () => {
    it('devuelve el listado si la respuesta es correcta', async () => {
      const mockData = [{ id: 1, titulo: 'Test' }]
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      })

      const result = await getAllPublicaciones()

      expect(fetch).toHaveBeenCalledWith(API_URL)
      expect(result).toEqual(mockData)
    })

    it('lanza error si la respuesta no es ok', async () => {
      fetch.mockResolvedValueOnce({ ok: false })

      await expect(getAllPublicaciones()).rejects.toThrow(
        'No se pudieron cargar las publicaciones'
      )
    })
  })

  describe('getPublicacionById', () => {
    it('incluye el token en la cabecera si existe', async () => {
      Storage.prototype.getItem.mockReturnValue('mi-token')
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ id: 1, titulo: 'Test' }),
      })

      await getPublicacionById(1)

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'mi-token',
        },
      })
    })

    it('no incluye Authorization si no hay token', async () => {
      Storage.prototype.getItem.mockReturnValue(null)
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ id: 1 }),
      })

      await getPublicacionById(1)

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
    })

    it('lanza "No autorizado" en 401', async () => {
      fetch.mockResolvedValueOnce({ status: 401, ok: false })
      await expect(getPublicacionById(1)).rejects.toThrow('No autorizado')
    })

    it('lanza "No autorizado" en 403', async () => {
      fetch.mockResolvedValueOnce({ status: 403, ok: false })
      await expect(getPublicacionById(1)).rejects.toThrow('No autorizado')
    })

    it('lanza error genérico si la respuesta no es ok', async () => {
      fetch.mockResolvedValueOnce({ status: 500, ok: false })
      await expect(getPublicacionById(1)).rejects.toThrow(
        'Error al obtener la publicación'
      )
    })
  })

  describe('deletePublicacion', () => {
    it('llama a fetch con method DELETE', async () => {
      Storage.prototype.getItem.mockReturnValue('mi-token')
      fetch.mockResolvedValueOnce({ ok: true, status: 200 })

      await deletePublicacion(1)

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/1`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'mi-token',
        },
      })
    })

    it('lanza error si falla el borrado', async () => {
      fetch.mockResolvedValueOnce({ ok: false, status: 500 })
      await expect(deletePublicacion(1)).rejects.toThrow(
        'Error al borrar la publicación'
      )
    })
  })

  describe('createPublicacion', () => {
    it('envía el FormData con el token, sin Content-Type', async () => {
      Storage.prototype.getItem.mockReturnValue('mi-token')
      const mockResponse = { id: 1 }
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })

      const formData = new FormData()
      formData.append('titulo', 'Nuevo post')

      const result = await createPublicacion(formData)

      expect(fetch).toHaveBeenCalledWith(API_URL, {
        method: 'POST',
        headers: { Authorization: 'mi-token' },
        body: formData,
      })
      expect(result).toEqual(mockResponse)
    })

    it('lanza error si falla la creación', async () => {
      fetch.mockResolvedValueOnce({ ok: false })
      await expect(createPublicacion(new FormData())).rejects.toThrow(
        'Error al crear la publicación'
      )
    })
  })

  describe('updatePublicacion', () => {
    it('llama a fetch con method PUT y el id correcto', async () => {
      Storage.prototype.getItem.mockReturnValue('mi-token')
      const mockResponse = { id: 5 }
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      })

      const formData = new FormData()
      const result = await updatePublicacion(5, formData)

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/5`, {
        method: 'PUT',
        headers: { Authorization: 'mi-token' },
        body: formData,
      })
      expect(result).toEqual(mockResponse)
    })

    it('lanza error si falla la actualización', async () => {
      fetch.mockResolvedValueOnce({ ok: false })
      await expect(updatePublicacion(5, new FormData())).rejects.toThrow(
        'Error al actualizar la publicación'
      )
    })
  })
})