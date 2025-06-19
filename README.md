# Lista de Usuarios - Next.js App Router + API local

Este proyecto es una aplicación Simple construida con **Next.js (App Router)** y **TypeScript**. Muestra una lista de usuarios obtenida desde una API local simulada con un archivo `db.json`. Al hacer clic en un usuario, se navega a una ruta dinámica que muestra los detalles completos de ese usuario.

## Tecnologías utilizadas

- [Next.js 13+ (App Router)](https://nextjs.org/docs/app)
- TypeScript
- Tailwind CSS
- API local con archivo JSON
- Sistema de rutas dinámicas

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Gonzalez-Nahuel/user-list-next
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

## Como funciona?

- La app lee un archivo local `src/db.json` que contiene una lista de usuarios.

- La API de Next.js `/api/users/[id]` permite consultar un usuario específico por su id.

- En la ruta princial `/`, se listan 10 usuarios.

- Al hacer clic sobre un usuario, se navega a `/user/[id]` y se muestra su información mas detallada.
