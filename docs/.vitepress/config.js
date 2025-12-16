import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PS4 Linux Tutorial",
  description: "A simple and modern guide on how to install Linux on PS4 systems.",
  base: "/ps4-linux-tutorial/",

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
          { text: 'Distro DIY', link: '/distrodiy' },
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
          { text: 'Setup', link: '/setup' },
          { text: 'Files', link: '/files' },
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
          { text: 'Distro DIY', link: '/distrodiy' },
          { text: 'Game testing', link: '/game-testing' },
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
    },
  }

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    it: {
      label: 'Italiano',
      lang: 'it-IT',

      // Theme configuration
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/it/' },
          { text: 'Informazioni', link: '/it/information' },
          {
            text: 'Problemi',
            items: [
              { text: 'Problemi generali', link: '/it/issues' },
              { text: 'Problemi per Baikal', link: '/it/baikal' },
            ]
          },
          {
            text: 'Altre cose interessanti',
            items: [
              { text: 'Post-installazione', link: '/it/postinstall' },
              { text: 'Distro DIY', link: '/it/distrodiy' },
            ]
          },
        ],

        sidebar: [
          {
            text: '📖 La Guida',
            collapsed: false,
            items: [
              { text: 'Informazioni Chiave', link: '/it/information' },
              { text: 'Revisioni e Southbridge', link: '/it/revisions' },
              { text: 'Setup', link: '/it/setup' },
              { text: 'File', link: '/it/files' },
              {
                text: '💿 Scegli il metodo di installazione',
                collapsed: true,
                items: [
                  { text: 'Metodi di installazione', link: '/installation' },
                  { text: 'Installazione interna', link: '/internal-installation' },
                  { text: 'Installazione esterna - Script', link: '/external-installation-scripted' },
                  { text: 'Installazione esterna - Manuale', link: '/external-installation-manual' },
                ],
              },
              { text: 'Fine', link: '/ending' },
            ]
          },
          {
            text: '💜 Post Installazione',
            collapsed: false,
            items: [
              { text: 'Setup post-installazione', link: '/postinstall' },
              { text: 'Distro DIY', link: '/distrodiy' },
              { text: 'Game testing', link: '/game-testing' },
            ]
          },
          {
            text: '💔 Problemi comuni',
            collapsed: false,
            items: [
              { text: 'Problemi comuni', link: '/issues' },
              { text: 'Problemi su Baikal', link: '/baikal' },
            ]
          }
          ,
          {
            text: '☠️ Contenuti Legacy',
            collapsed: true,
            items: [
              { text: 'Legacy e preservazione', link: '/legacy' },
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
          message: 'Rilasciato sotto la <a href="https://github.com/DionKill/ps4-linux-tutorial/blob/main/LICENSE">Licenza MIT</a>.',
        },

        lastUpdated: {
          text: 'Aggiornato il'
          }
        },
      }
    }
  },
})
