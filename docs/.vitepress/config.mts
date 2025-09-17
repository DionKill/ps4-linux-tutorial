import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "ps4-linux-tutorial",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/overview' }
    ],

    sidebar: [
      {
        text: 'The Guide',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Preparations', link: '/preparations' },
          { text: 'Setup', link: '/setup' },
          { text: 'Installation', link: '/installation' },
          { text: 'Ending', link: '/ending' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DionKill/ps4-linux-tutorial/' }
    ]
  }
})
