

module.exports = {
    title: 'EZ實況野球工廠',
    description: 'Just playing around',
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    base: '/ebaseball/',
    theme: 'vuetify',
    themeConfig: {
        nav: [
            {
                text: 'FB粉絲團',
                link: 'https://www.facebook.com/Ezcan%E7%9A%84%E9%9B%BB%E7%8E%A9%E9%9B%9C%E8%A8%98-100642404913307'
            },
            {
                text: 'LINE社群',
                link: 'https://line.me/ti/g2/bBgyylN25lBVn6riDkrzcQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default'
            }
        ],
        sidebarDepth: 1,
        sidebar:[
            ["/Brothers/", "中信兄弟"],
            ["/Lions/", "統一7-ELEVEN獅"],
            ["/Guardians/", "富邦悍將"],
            ["/OB/", "經典OB再現"],
            ["/漢字搜尋器", "漢字搜尋器"],
            // ["/野手計算機", "野手計算機"],
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