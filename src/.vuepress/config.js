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
            text: 'Digital',
            items: [
              {
                  text: 'Digital Marketing',
                  link: '/stories/digital/01-succeed-with-digital-marketing/'
              },
              {
                text: 'Deep Marketing',
                link: '/stories/digital/02-deep-marketing-automation/'
              }
            ]
          },
          {
            text: 'Health',
            items: [
              {
                text: 'Healthy Lifestyle',
                link: '/stories/health/01-starting-a-healthy-lifestyle/'
              },
              {
                text: 'Weight Loss',
                link: '/stories/health/02-fundamentals-of-weight-loss/'
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
      '/aboutme/': [
        {
          title: 'About Me',
          collapsable: false,
          children: [
            '/aboutme/'
          ]
        }
      ], '/stories/': [
        {
          title: 'Stories',
          collapsable: false,
          children: [
            'digital/01-succeed-with-digital-marketing/',
            'digital/02-deep-marketing-automation',
            'health/01-starting-a-healthy-lifestyle/',
            'health/02-fundamentals-of-weight-loss/'
          ]
        }
      ],
    }
  },

  locales: {
    '/': {
      lang: 'English',
      selectText: 'Languages'

    },
    '/ta/': {
      lang: 'Tamil',
      selectText: 'Languages'
    }
  },

  plugins: {
    '@vuepress/blog': {
      sitemap: {
        hostname: 'https://localhost:8080'
      },
      newsletter: {
        endpoint: "https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138"
      },
      feed: {
        canonical_base: 'https://localhost:8080',
       },
    },
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
