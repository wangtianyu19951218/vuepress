module.exports = {
    //这是用于写导航栏,侧边栏的
   title: '徐州国信招标有限公司',
  description: '公平 公正 公开',
  plugins: ['@vuepress/back-to-top'],
  head: [
    ['link', { rel: 'icon', href: '/home.ico' }],
  ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '采购信息',
                items: [
                    { text: '采购公告', link: '/caigou/' },
                    { text: '中标公告', link: '/zhongbiao/' },
                    { text: '更正公告', link: '/modify/' },
                    { text: '废标公告', link: '/invaild/' },
                    { text: '合同公告', link: '/contract/' }
                ]
            },
            {
                text: '政策法规',
                items: [
                    { text: '行业新闻', link: '/policy/' },
                    { text: '国家政策', link: '/policy/' },
                    { text: '政策法规', link: '/policy/' },
                ]
            },
            {
                text: '投诉监管',
                items: [
                    { text: '投诉建议', link: '/suggest/' },
                    { text: '失信行为', link: '/dishonest/' },
                    { text: '意见反馈', link: '/feedback/' },
                ]
            },
            { text: '资料下载', link: '/download/' },
            { text: '联系我们', link: '/contact/' },
        ],
        //sidebar:false,
    },
}