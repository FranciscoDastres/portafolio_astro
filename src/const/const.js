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
  {
    img: "../../../img/ImpresionArte.webp",
    title: "ImpresionArte",
    link: "https://impresion-arte.vercel.app/",
    description: `Sitio web en desarrollo proyecto diseñado para ofrecer servicios de impresiones 3D`,
    technologies: [
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
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.postgres,
      },
    ],
  },
];
