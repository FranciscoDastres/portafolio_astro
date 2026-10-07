# Francisco Meza Dastres · Portafolio

Portafolio personal construido con Astro, TypeScript y Tailwind CSS, con integración de React disponible y animaciones GSAP/ScrollTrigger. El diseño presenta proyectos reales, experiencia, playlist de Spotify y contacto.

## Emblema

El icono es un escudo original azul con borde metálico y estrella de cuatro puntas. Su fuente vectorial está en `public/brand/portfolio-shield.svg`. Las versiones SVG, PNG, ICO y el icono de acceso directo se regeneran con:

```bash
node scripts/build-icons.mjs
```

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
- `src/components/projectList.astro`: proyectos presentados uno por uno, con imagen, descripción, tecnologías y enlace al sitio publicado.
- `src/components/stack.astro`: fichas de tecnologías con transiciones, selección por cursor y teclado, y enlaces a la documentación oficial en otra pestaña.
- `src/components/about.astro`: experiencia y presentación personal.
- `src/scripts/motion.ts`: entrada de portada, movimiento del fondo, parallax y pausa de animaciones. Respeta movimiento reducido y guarda la preferencia de pausa.
- `src/components/music.astro`: playlist de Spotify.
- `src/components/contact.astro`: formulario Formspree y correo directo.
- `src/styles/global.css`: colores, tipografía, composición y estilos responsive.
- `src/layouts/Layout.astro`: metadatos, idioma y estructura del documento.

El formulario conserva el endpoint Formspree existente. Sus estados de éxito y error se verifican localmente con respuestas simuladas, sin enviar mensajes reales.

## Bandeja del formulario

El formulario envía a Formspree, ID `xbdawoow`. Los mensajes se consultan en Formspree → formulario → **Submissions**. El destinatario se configura en **Workflow → Email → Settings** (o **Settings → Target Email** en formularios antiguos) y no está definido en este repositorio. El enlace de correo directo utiliza `francisco.meza.amazon.dev@gmail.com`; eso no confirma el destinatario configurado en Formspree.

[Guía oficial de Formspree](https://help.formspree.io/articles/form-and-project-settings/changing-a-form-email-address).

## Despliegue

El repositorio está integrado con Vercel. Los cambios enviados a `main` activan el despliegue de producción. Usar `npm run build` como comando de compilación y `dist` como directorio de salida.

> **Important Notice:**  
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit).  
> According to the license terms, any redistribution (including compiled or modified versions), you **must** retain the original copyright
> notice and the full license text. Copyright © 2025 Francisco Meza Dastres. All rights reserved.
