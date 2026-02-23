// @ts-check
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "/ps4-linux-tutorial/",
  sitemap: {
    hostname: 'https://dionkill.github.io/ps4-linux-tutorial/'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    }
  },

  // Theme configuration
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/information' },
      {
        text: 'Issues',
        items: [
          { text: 'General issues', link: '/issues' },
          { text: 'Baikal specific issues', link: '/baikal' },
        ]
      },
      {
        text: 'More goodies',
        items: [
          { text: 'Post-install', link: '/postinstall' },
          { text: 'Game compatibility', link: '/game-testing' },
        ]
      },
    ],

    sidebar: [
      {
        text: '📖 The Installation Guide',
        collapsed: false,
        items: [
          { text: 'Key Information', link: '/information' },
          { text: 'Revisions and Southbridges', link: '/revisions' },
          { text: '⌨️ Setup', link: '/setup' },
          { text: '📁 Files', link: '/files' },
          {
            text: '💿 Choose your Install',
            collapsed: true,
            items: [
              { text: 'Installation Methods', link: '/installation' },
              { text: 'Internal Installation', link: '/internal-installation' },
              { text: 'Scripted External Installation', link: '/external-installation-scripted' },
              { text: 'Manual External Installation', link: '/external-installation-manual' },
            ],
          },
          { text: 'Ending', link: '/ending' },
        ]
      },
      {
        text: '💜 Post Installation',
        collapsed: false,
        items: [
          { text: 'Post install setup', link: '/postinstall' },
        ]
      },
      {
        text: '🧩 Extra',
        collapsed: false,
        items: [
          { text: 'Game compatibility', link: '/game-testing' },
          { text: 'Distro DIY', link: '/distrodiy' },
        ]
      },
      {
        text: '💔 Common issues',
        collapsed: false,
        items: [
          { text: 'Common issues', link: '/issues' },
          { text: 'Baikal issues', link: '/baikal' },
        ]
      }
      ,
      {
        text: '☠️ Legacy Content',
        collapsed: true,
        items: [
          { text: 'Legacy and preservation', link: '/legacy' },
        ]
      }
    ],

    cleanUrls: 'true',

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/QtcPmzHVVm' },
      { icon: 'fluxer', link: 'https://fluxer.gg/b7fFDGsY' },
      { icon: 'github', link: 'https://github.com/DionKill/ps4-linux-tutorial/' },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/DionKill/ps4-linux-tutorial/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025-2026 <a href="https://github.com/dionkill">Diego Pireddu</a>.'
    },

    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    },
  },

  // Metadata and favicon
  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/png', href: '/ps4-linux-tutorial/favicon.png', sizes: '32x32' }],
    // SEO
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Basic metadata
    ['meta', { name: 'description', content: 'A step-by-step guide for running Linux on PS4' }],

    // Open Graph (Discord, Facebook, etc.)
    ['meta', { property: 'og:title', content: 'PS4 Linux Tutorial' }],
    ['meta', { property: 'og:description', content: 'Learn how to run Linux on your PlayStation 4 with this modern and simple guide. We will go over how to setup, download kernel and distro, install, boot, customize and optimize your installation to your liking, and also fix any issues that may occur.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dionkill.github.io/ps4-linux-tutorial/' }],
    ['meta', { property: 'og:image', content: 'https://dionkill.github.io/ps4-linux-tutorial/preview.png' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'PS4 Linux Tutorial' }],
    ['meta', { name: 'twitter:description', content: 'Step-by-step guide for running Linux on PS4.' }],
    ['meta', { name: 'twitter:image', content: 'https://dionkill.github.io/ps4-linux-tutorial/preview.png' }],
  ],
})
