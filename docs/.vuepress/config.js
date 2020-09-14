

module.exports = {
    title: 'EZ野球工廠',
    description: 'Just playing around',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    base: '/ebaseball/',
    // theme: '@vuepress/blog',
    themeConfig: {
        nav: [
            {
                text: 'FB粉絲團',
                link: 'https://www.facebook.com/Ezcan%E7%9A%84%E9%9B%BB%E7%8E%A9%E9%9B%9C%E8%A8%98-100642404913307'
            },
            {
                text: 'LINE社群',
                link: ''
            }
        ],
        sidebarDepth: 1,
        sidebar:[
            ["/2019/", "中職30年能力查定"],
            ["/漢字搜尋器", "漢字搜尋器"],
            ["/野手計算機", "野手計算機"],
        ]
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-149142019-2'
          }
        ]
      ]
  }