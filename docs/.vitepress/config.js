import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Archery Event App Guide",
  description: "User guidelines and documentation for the Archery Event application",
  base: "/archery-event-bmad/", // Depending on where it will be hosted on GitHub pages, we might need to adjust this. Usually /repo-name/
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],

    sidebar: [
      {
        text: 'User Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phamhuutruong7/archery-event-bmad' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  }
})
