import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
// import compress from 'astro-compress'
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  site: 'https://bibudem-prototype.netlify.app/',
  // base: '/prototype-web',
  compressHTML: false,
  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    // compress({
    //   HTML: false
    // })
  ],
})
