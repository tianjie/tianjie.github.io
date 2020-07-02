const themeConfig = require('./config/theme/')

module.exports = {
  base : "tianjie.github.io",
  title: "天街小雨",
  description: 'Fake It Till You Make It!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  