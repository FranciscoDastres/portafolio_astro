# Francisco Meza Dastres · Portafolio

Portafolio personal construido con Astro, TypeScript y Tailwind CSS, con integración de React disponible y animaciones GSAP/ScrollTrigger. El diseño presenta proyectos reales, experiencia, playlist de Spotify y contacto.

## Desarrollo

```bash
npm ci
npm run dev
```

## Verificación y compilación

```bash
npm run build
npm run preview
```

El build ejecuta `astro check` y genera el sitio estático en `dist/`.

## Contenido

- `src/data/projects.ts`: proyectos, capturas, tecnologías y enlaces.
- `src/components/home.astro`: portada inmersiva con arte original y presentación personal.
- `src/components/nav.astro`: menú de pantalla completa con diálogo nativo, teclado y foco.
- `src/components/projects.astro` y `src/scripts/carousel.ts`: carrusel Embla con miniaturas, arrastre, navegación por teclado y detalles de cada proyecto. El avance automático comienza al entrar en la sección. Las flechas, miniaturas y el arrastre reinician el intervalo; se puede pausar y respeta movimiento reducido.
- `src/components/stack.astro`: fichas de tecnologías con selección por cursor, teclado y toque.
- `src/components/about.astro`: experiencia y presentación personal.
- `src/scripts/motion.ts`: entrada de portada, movimiento del fondo, parallax y pausa de animaciones. Respeta movimiento reducido y guarda la preferencia de pausa.
- `src/components/music.astro`: playlist de Spotify.
- `src/components/contact.astro`: formulario Formspree y correo directo.
- `src/styles/global.css`: colores, tipografía, composición y estilos responsive.
- `src/layouts/Layout.astro`: metadatos, idioma y estructura del documento.

El formulario conserva el endpoint Formspree existente. Sus estados de éxito y error se verifican localmente con respuestas simuladas, sin enviar mensajes reales.

## Despliegue

El repositorio está integrado con Vercel. Los cambios enviados a `main` activan el despliegue de producción. Usar `npm run build` como comando de compilación y `dist` como directorio de salida.

> **Important Notice:**  
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit).  
> According to the license terms, any redistribution (including compiled or modified versions), you **must** retain the original copyright
> notice and the full license text. Copyright © 2025 Francisco Meza Dastres. All rights reserved.
