import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "/ps4-linux-tutorial/",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/ps4-linux-tutorial/favicon.png', sizes: '32x32' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/overview' }
    ],

    sidebar: [
      {
        text: '📖 The Installation Guide',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Setup', link: '/setup' },
          { text: 'Files', link: '/files' },
          { text: 'Installation', link: '/installation' },
          { text: 'Ending', link: '/ending' },
        ]
      },
      {
        text: '💜 Post Installation',
        collapsed: false,
        items: [
          { text: 'Post install setup', link: '/postinstall' },
          { text: 'Common issues', link: '/issues' },
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
