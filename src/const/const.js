export const studies = [
  {
    title: "Ingeniería en Informática",
    corporation: "Universidad de los Lagos",
    date: "03/2016 – 12/2023",
  },
  {
    title: "Desarrollador JavaScript Full Stack",
    corporation: "Academia Desafio Latam",
    date: "03/2023 – 07/2024",
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  styled: "styled",
  tailwind: "tailwind",
  git: "git",
  github: "github",
  nodejs: "nodejs",
  vite: "vite",
  postgres: "postgres",
  php: "php",
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },

  {
    title: "Github",
    icon: IconKeys.github,
  },
  {
    title: "Styled Components",
    icon: IconKeys.styled,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "Vite",
    icon: IconKeys.vite,
  },
  {
    title: "Postgresql",
    icon: IconKeys.postgres,
  },
  {
    title: "Php",
    icon: IconKeys.php,
  },
];

export const projects = [

  {
    img: "../../../img/cyberpunk.webp",
    title: "cyberpunk",
    link: "https://preeminent-liger-266356.netlify.app/",
    description: `este proyecto se trata de un clon de la pagína de cyberpunk , donde
      el ususario puede ver los tailer de él juegos y también los
      episodios de la serie....`,
    technologies: [
      {
        icon: IconKeys.html,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
    ],
  },
  {
    img: "../../../img/store-games.webp",
    title: "Store games",
    link: "https://store-games-site.netlify.app/",
    description: `Simulando una página de juegos , consumiendo la API de rawg api
      donde los usuarios pueden buscar videojuegos, ver sus detalles como
      creadores , calificaciones,tiendas donde comprar.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
    ],
  },
  {
    img: "../../../img/movie.webp",
    title: "Movie Tv",
    link: "https://movietvsite.netlify.app/",
    description: `simulando una página de películas , consumiendo la API de themovietv
              donde los usuarios pueden buscar películas y ver trailer.....`,
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
  {
    img: "../../../img/codelium.webp",
    title: "Codelium",
    link: "https://codelium.cl/",
    description: `Startup de Desarrollo de Software utilizando PHP`,
    technologies: [
      {
        icon: IconKeys.php,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ],
  },
];
