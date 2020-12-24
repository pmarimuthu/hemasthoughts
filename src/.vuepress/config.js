module.exports = ctx => ({
  title: 'Hema\'s Thoughts',
  description: 'Mindful thoughts on Health | Home | Digital > [தமிழ் / English ]',

  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/myassets/img/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/myassets/img/favicon.ico"}],
    ['link', { rel: "shortcut icon", href: "/myassets/img/favicon.ico"}],
  ],

  themeConfig: {
    logo: '/myassets/img/logo.png',
    domain: 'hemasthoughts.com',
    repo: 'pmarimuthu/hemasthoughts',
    docsBranch: 'development',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    author: 'Hema Thiruchelvam',
    smoothScroll: true,

    nav: [
      {
        text: 'About Me',
        link: '/aboutme/',
      },
      {
        text: 'Stories',
        items: [
          {
            text: 'Top Stories',
            link: '/stories/'
          },
          {
            text: 'Health',
            items: [
              {
                text: 'Healthy Lifestyle',
                link: '/stories/starting-a-healthy-lifestyle/'
              },
              {
                text: 'Weight Loss',
                link: '/stories/fundamentals-of-weight-loss/'
              }
            ]
          },
          {
            text: 'Digital',
            items: [
              {
                  text: 'Digital Marketing',
                  link: '/stories/succeed-with-digital-marketing/'
              },
              {
                text: 'Deep Marketing',
                link: '/stories/deep-marketing-automation/'
              }
            ]
          }
        ]
      },
      {
        text: 'Sign In',
        link: '/member/signin/',
      }
    ],

    sidebar: {
      'aboutme/': [
        {
          title: 'About Me',
          collapsable: false,
          children: [
            '/aboutme/'
          ]
        }
      ], 'stories/': [
        {
          title: 'Stories',
          collapsable: false,
          children: [
            '/stories/starting-a-healthy-lifestyle/',
            '/stories/fundamentals-of-weight-loss/',
            '/stories/succeed-with-digital-marketing/',
            '/stories/deep-marketing-automation',
          ]
        }
      ],
    }
  },

  locales: {
    '/': {
      lang: 'English',
      label: 'English',
      selectText: 'Languages'

    },
    '/ta/': {
      lang: 'Tamil',
      label: 'தமிழ்',
      selectText: 'Languages'
    }
  },

  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      updatePopup: {
        message: 'New content is available',
        buttonText: 'Refresh'
      }
    },
    '@vuepress/medium-zoom': true,
    '@vuepress/google-analytics': {
      ga: 'UA-181818681-1'
    }
  }
})
