import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import PostCard from '../src/components/Home/PostCard'

const mockPost = {
  id: 1,
  titulo: 'Mi viaje a París',
  extracto: 'Una experiencia inolvidable...',
  imagen: '/uploads/paris.jpg',
  categoria: 'PARIS',
  autor: 'Rosana',
}

describe('PostCard', () => {
  it('muestra el título, el extracto y el autor de la publicación', () => {
    render(
      <MemoryRouter>
        <PostCard post={mockPost} />
      </MemoryRouter>
    )

    expect(screen.getByText('Mi viaje a París')).toBeInTheDocument()
    expect(screen.getByText('Una experiencia inolvidable...')).toBeInTheDocument()
    expect(screen.getByText('Rosana')).toBeInTheDocument()
    expect(screen.getByText('PARIS')).toBeInTheDocument()
  })

  it('enlaza al detalle de la publicación correcta', () => {
    render(
      <MemoryRouter>
        <PostCard post={mockPost} />
      </MemoryRouter>
    )

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/publicacion/1')
  })

  it('muestra la imagen con el alt del título', () => {
    render(
      <MemoryRouter>
        <PostCard post={mockPost} />
      </MemoryRouter>
    )

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Mi viaje a París')
  })
})