import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "/ps4-linux-tutorial/",
  head: [['link', { rel: 'icon', href: '/base/favicon.ico' }]],

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
          { text: 'Setup', link: '/setup' },
          { text: 'Files', link: '/files' },
          { text: 'Installation', link: '/installation' },
          { text: 'Post install', link: '/postinstall' },
          { text: 'Ending', link: '/ending' },
        ]
      }
    ],

    // Custom added stuff

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DionKill/ps4-linux-tutorial/' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/DionKill/ps4-linux-tutorial/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025 <a href="https://github.com/dionkill">Diego Pireddu</a>.'
    },

    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    }
  }
})
