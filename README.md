# Viajar con Encanto — Frontend

Blog de viajes donde los usuarios pueden registrarse, iniciar sesión y compartir sus experiencias de viaje mediante publicaciones con imagen. Este repositorio contiene la aplicación **frontend**, construida en React.

Proyecto individual de bootcamp. El backend (Java Spring Boot) vive en un repositorio aparte.

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Diseño](#diseño)
- [Autenticación](#autenticación)
- [Roadmap](#roadmap)

## Tecnologías

- **React** + **Vite**
- **Tailwind CSS v4** (tema personalizado mediante `@theme`)
- **React Router DOM** para el enrutado
- **JWT** para la autenticación contra el backend
- **ESLint** para linting

## Requisitos previos

- Node.js (v18 o superior recomendado)
- npm
- El backend de Viajar con Encanto corriendo (por defecto en `http://localhost:8080`)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/rosana50factoria/proyecto-viajar-encanto-frontend.git
cd proyecto-viajar-encanto-frontend

# Instalar dependencias
npm install

# Arrancar en modo desarrollo
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173` (puerto por defecto de Vite).

## Variables de entorno

Este proyecto consume la API del backend de Viajar con Encanto. Si la URL base del backend no está en `http://localhost:8080`, ajústala en el fichero de configuración/servicio correspondiente (por ejemplo `src/services/`) o define una variable de entorno de Vite:

```
VITE_API_BASE_URL=http://localhost:8080
```

## Scripts disponibles

> Revisa `package.json` para confirmar los nombres exactos; estos son los habituales en un proyecto Vite + React:

| Comando           | Descripción                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Levanta el servidor de desarrollo con HMR     |
| `npm run build`    | Genera el build de producción                |
| `npm run preview`  | Sirve localmente el build de producción       |
| `npm run lint`     | Ejecuta ESLint sobre el proyecto              |

## Estructura del proyecto

```
src/
├── components/
│   ├── Home/              # CategoryFilter, Hero, PostCard, PostGrid...
│   ├── header/             # Header
│   ├── footer/             # Footer
│   └── ...                 # Componentes comunes: AuthCard, TextInput, Button, ImageDropZone...
├── pages/                  # Páginas: Home, Login, creación/edición de publicaciones...
├── config/
│   └── router.jsx          # Configuración de rutas (react-router-dom)
├── hooks/
│   └── usePublicaciones.js # Hook para obtener/gestionar publicaciones
├── services/
│   └── publicacionService.js # Llamadas a la API de publicaciones
├── utils/
│   ├── mappers.js
│   └── datapublicacion.js
└── App.jsx                 # Layout general: Header / Outlet / Footer
```

## Funcionalidades

- **Registro e inicio de sesión** de usuarios (autenticación JWT).
- **Listado de publicaciones** con filtro por país/categoría.
- **Detalle de publicación** por id.
- **Creación y edición de publicaciones**, incluyendo subida de imagen (`multipart/form-data`).
- **Gestión de sesión** mediante contexto de autenticación (`AuthContext`).

## Diseño

La interfaz se diseñó primero en Stitch y se llevó a Figma. La paleta de colores está integrada como tema de Tailwind (`@theme`) en lugar de usar valores hexadecimales sueltos:

| Uso        | Color                          |
| ---------- | ------------------------------- |
| Primary    | `#D97757`                       |
| Secondary  | `#5D8799`                       |
| Tertiary   | `#F2E8CF`                       |
| Neutral    | `#4A4540`                       |

Tipografías: **Noto Serif** (titulares) y **Plus Jakarta Sans** (cuerpo/labels).

La interfaz está pensada para ser responsive (Header, Footer y Hero adaptados a distintos tamaños de pantalla).

## Autenticación

El login envía las credenciales al backend (`/login`), que responde con un token JWT en la cabecera `Authorization`. El token se guarda en `localStorage` y se reutiliza en las siguientes peticiones autenticadas. El estado de sesión se gestiona a través de `AuthContext`.

## Roadmap

- [ ] Completar el flujo de creación/edición de publicaciones con imagen
- [ ] Pulir la gestión de acceso a imágenes servidas desde el backend (`/uploads/`)
- [ ] Mejoras de responsive y accesibilidad

---

Repositorio del backend: *(añade aquí el enlace cuando lo publiques)*