import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/archery-event-guideline/",
  
  // Shared properties
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/phamhuutruong7/archery-event-bmad' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Archery Event App Guide",
      description: "User guidelines and documentation for the Archery Event application",
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
        ]
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      title: "Hướng dẫn ứng dụng",
      description: "Hướng dẫn sử dụng và tài liệu cho ứng dụng sự kiện bắn cung",
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi/' },
          { text: 'Hướng dẫn', link: '/vi/guide/getting-started' }
        ],
        sidebar: [
          {
            text: 'Hướng dẫn sử dụng',
            items: [
              { text: 'Bắt đầu', link: '/vi/guide/getting-started' },
            ]
          }
        ]
      }
    }
  }
})
