// @ts-check
// defineConfig es la función de Astro que crea la configuración del proyecto.
// En este objeto se definen opciones como el site, las integraciones, etc.
import { defineConfig } from 'astro/config';

// @astrojs/sitemap es una integración que, al compilar el proyecto, genera
// automáticamente un archivo sitemap.xml con todas las páginas del sitio.
// El sitemap es un mapa del sitio que Google y otros buscadores usan para
// indexar las páginas más rápido, por eso es importante para el SEO.
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Configuración principal del proyecto (más información en el enlace de arriba)
export default defineConfig({
  integrations: [sitemap()]
  // NOTA: falta la opción "site: 'https://tudominio.com'" dentro de
  // defineConfig. La integración sitemap la necesita para saber la URL base
  // del sitio y así generar las URLs completas del sitemap.xml.
  // Sin ella, Astro muestra una advertencia y el sitemap no se genera bien.
});