// const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({

  //dest: 'src/vuepress',

  title: 'Hema\'s Thoughts',
  description: 'Mindful thoughts on Health | Home | Digital > [தமிழ் / English ]',

  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
  ],

  themeConfig: {
    logo: '/myassets/img/logo.png',
    domain: 'https://www.hemasthoughts.com/',
    repo: 'pmarimuthu/hemasthoughts',
    docsBranch: 'development',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated On',
    author: 'Hema Thiruchelvam',
    twitterHandle: '@HemaThiru',
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
                link: '/stories/story2/'
              },
              {
                text: 'Weight Loss',
                link: '/stories/story4/'
              }
            ]
          },
          {
            text: 'Family',
            items: [
              {
                text: 'Self Transformation',
                link: '/stories/story3/'
    
              }
            ]
          },
          {
            text: 'Digital',
            items: [
              {
                  text: 'Digital Marketing',
                  link: '/stories/story1/'
              }
            ]
          }
        ]
      },
      {
        text: 'Sign In',
        link: '/member/',
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
            '/stories/story1/',
            '/stories/story2/',
            '/stories/story3/',
            '/stories/story4/',
          ]
        }
      ],
    }
  },

  locales: {
    '/': {
      lang: 'en-US',
      selectText: 'Languages',
      ariaLabel: 'Select language',
      title: 'Hema\'s Thoughts',
      description: 'Mindful thoughts on Health | Home | Digital | English'
    },
    '/ta/': {
      lang: 'ta-IN',
      selectText: 'தமிழ்',
      ariaLabel: 'தமிழ்',
      title: 'Hema\'s Thoughts',
      description: 'Mindful thoughts on Health | Home | Digital | தமிழ்'
    }
  },

  plugins: [
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      type: $page => ['stories', 'aboutme'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-181818681-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/ta.js'
  ]
})
