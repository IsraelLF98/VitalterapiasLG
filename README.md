# VitalTerapias LG 🍊

Sitio web oficial de **VitalTerapias LG**, un centro de terapia de **Vitamina C intravenosa** para fortalecer el sistema inmunológico, combatir la fatiga y mejorar la calidad de vida.

> 🇪🇸 Todo el contenido de este proyecto está en **español**.

## 🚀 Características

- 💉 Página única (landing page) con todas las secciones del negocio
- 🎨 Diseño moderno con degradados ámbar/naranja y efectos de vidrio (glassmorphism)
- 📱 Totalmente **responsive** (móvil, tablet y escritorio)
- ✨ Animaciones de aparición al hacer scroll (Scroll Reveal)
- 💬 Botón flotante de **WhatsApp** con enlaces directos para agendar citas
- 🗣️ Testimonios de pacientes con carrusel automático
- ❓ Sección de **preguntas frecuentes** (acordeón)
- 🔍 Datos estructurados **Schema.org** para Google (rich snippets)
- 🗺️ Sitemap automático con `@astrojs/sitemap`
- ⚙️ Integración con **GitHub Pages** y **Netlify**

## 📂 Estructura del proyecto

```text
/
├── .github/workflows/    # Workflow de deploy a GitHub Pages
├── public/
│   └── img/              # Imágenes estáticas del sitio
├── src/
│   ├── components/       # Componentes .astro de cada sección
│   │   ├── Navbar.astro          # Barra de navegación
│   │   ├── Hero.astro            # Sección principal (inicio)
│   │   ├── About.astro           # ¿Qué es la terapia?
│   │   ├── Benefits.astro        # Beneficios
│   │   ├── Process.astro         # Proceso paso a paso
│   │   ├── Testimonials.astro    # Testimonios de pacientes
│   │   ├── FAQ.astro             # Preguntas frecuentes
│   │   ├── Contact.astro         # Sección de contacto
│   │   ├── Footer.astro          # Pie de página
│   │   └── WhatsAppButton.astro  # Botón flotante de WhatsApp
│   ├── layouts/
│   │   └── Layout.astro          # Estructura HTML base (head, SEO, meta tags)
│   ├── pages/
│   │   └── index.astro           # Página principal
│   └── styles/
│       └── global.css            # Estilos globales (variables, botones, animaciones)
├── astro.config.mjs       # Configuración de Astro
├── netlify.toml           # Configuración de despliegue en Netlify
├── package.json           # Dependencias y comandos
└── tsconfig.json          # Configuración de TypeScript
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando                 | Acción                                                       |
| :---------------------- | :----------------------------------------------------------- |
| `npm install`           | Instala las dependencias                                     |
| `npm run dev`           | Inicia el servidor de desarrollo en `localhost:4321`         |
| `npm run build`         | Compila el sitio de producción en `./dist/`                  |
| `npm run preview`       | Previsualiza la compilación localmente, antes de publicar    |
| `npm run astro ...`     | Ejecuta comandos de la CLI de Astro como `astro add`, `astro check` |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro                          |

## 🌐 Despliegue

El proyecto incluye dos opciones de despliegue listas para usar:

- **GitHub Pages**: el workflow `.github/workflows/deploy.yml` publica el sitio automáticamente al hacer `push` a `main` o `master` (actívalo en *Settings → Pages → Source: GitHub Actions*).
- **Netlify**: el archivo `netlify.toml` ya configura el comando de build (`npm run build`) y la carpeta de publicación (`dist`).

## 📝 Personalización rápida

- **Número de WhatsApp**: busca `wa.me/593...` en los componentes para cambiar el número de contacto.
- **Correo y teléfono**: edita la sección de contacto en `src/components/Contact.astro` y `Footer.astro`.
- **Testimonios**: edita el arreglo `testimonials` en `src/components/Testimonials.astro`.
- **Preguntas frecuentes**: edita el arreglo `faqs` en `src/components/FAQ.astro`.

## 🤝 Contribuir

¿Encontraste un error o quieres mejorar el sitio? Siéntete libre de abrir un *issue* o enviar un *pull request*. Toda ayuda es bienvenida.

## 📄 Licencia

© VitalTerapias LG — Todos los derechos reservados.
