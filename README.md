# Astro Starter Kit: Portal Educativo de Ingeniería en IIA

## 📚 Proyecto: Portal Educativo de Ingeniería en IIA

Este proyecto tiene como objetivo crear un sitio web educativo donde se pueda consultar el contenido utilizado en cada materia cursada en la carrera de Ingeniería en IIA. El sitio permitirá a los estudiantes acceder a materiales de estudio, lecciones y recursos adicionales de manera organizada y fácil de navegar.

## 🚀 Estructura del (Proyecto al momento)

Dentro de tu proyecto de Astro, verás las siguientes carpetas y archivos:

```text
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── blog-placeholder-1.jpg
│   ├── blog-placeholder-2.jpg
│   ├── blog-placeholder-3.jpg
│   ├── blog-placeholder-4.jpg
│   ├── blog-placeholder-5.jpg
│   ├── blog-placeholder-about.jpg
│   ├── favicon.svg
│   └── fonts
│       ├── atkinson-bold.woff
│       └── atkinson-regular.woff
├── README.md
├── src
│   ├── components
│   │   ├── CourseCard.astro
│   │   ├── CourseContent.astro
│   │   ├── CourseSidebar.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   └── SemesterSection.astro
│   ├── constants
│   │   └── courses.ts
│   ├── consts.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── CourseLayout.astro
│   ├── pages
│   │   ├── course
│   │   │   └── fundamentos-programacion
│   │   │       ├── index.astro
│   │   │       ├── leccion1.mdx
│   │   │       └── leccion2.md
│   │   └── index.astro
│   ├── styles
│   │   └── global.css
│   └── types
│       ├── Course.ts
│       └── Semester.ts
├── tailwind.config.mjs
└── tsconfig.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

La carpeta `src/components/` contiene los componentes de Astro/Vue que se utilizan en el proyecto.

El directorio `src/constants/` almacena archivos con constantes y configuraciones utilizadas en el proyecto.

El directorio `src/layouts/` contiene los diseños utilizados en las páginas del proyecto.

El directorio `src/pages/` contiene las páginas del sitio. Cada página representa una materia o una sección del sitio.

El directorio `src/types/` contiene definiciones de tipos TypeScript utilizadas en el proyecto.

Los recursos estáticos, como imágenes y fuentes, se colocan en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                   |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321`       |
| `npm run build`           | Construye tu sitio de producción en `./dist/`              |
| `npm run preview`         | Previsualiza tu compilación localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`       |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro                         |

## 🔧 Extensiones Recomendadas para VSCode

Para mantener el proyecto lo más limpio y organizado posible, se recomienda utilizar las siguientes extensiones en VSCode:

- **Astro**: [Astro VSCode Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) - Soporte para el desarrollo de Astro.
- **Tailwind CSS IntelliSense**: [Tailwind CSS IntelliSense Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocompletado y sugerencias para clases de Tailwind CSS.
- **Prettier - Code formatter**: [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formateador de código para mantener un estilo consistente.
- **MDX**: [MDX Extension](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) - Soporte para archivos MDX.
- **TypeScript**: [TypeScript Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) - Soporte mejorado para TypeScript.
- **Path IntelliSense**: [Path IntelliSense Extension](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Autocompletado de rutas de archivos.

Estas extensiones ayudarán a mantener el código limpio, organizado y conforme a las mejores prácticas durante el desarrollo del proyecto.

## 👀 ¿Quieres aprender más?

Consulta [la documentación de Astro](https://docs.astro.build) o únete a su [servidor de Discord](https://astro.build/chat).

## Crédits

Los estilos están siendo generados a partir de [ TailwindCSS](https://tailwindcss.com/).

## 🚧 Contribuciones

Este README está dirigido a los desarrolladores que trabajan en este proyecto y a aquellos que deseen contribuir. El objetivo es proporcionar una visión general clara del proyecto y su estructura para facilitar el desarrollo y la colaboración. ¡Gracias por tu interés en contribuir!

---

**Nombre Temporal del Proyecto**: Portal Educativo de Ingeniería en IIA
