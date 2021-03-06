'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 4311, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: false,

    // 代理列表, 是否开启代理通过[./dev.env.js]配置
    // 处理跨域
    proxyTable: {
      '/dailyReport': {
          target: 'http://10.172.0.200:8080/gdmcmc-app/dailyReport', 
          // target: 'http://10.172.4.106:8080/gdmcmc-app/', 
          changeOrigin: true,
          pathRewrite: {
              '^/dailyReport': ''
          }
      },

      '/app': {
        target: 'http://10.172.0.200:8080/gdmcmc-app/app', 
        changeOrigin: true,
        pathRewrite: {
            '^/app': ''
        }
      },
      
      '/wcwc': {
        target: 'http://10.172.0.200:28080/wcwc/', 
        // target: 'http://10.172.4.104:8080/wcwc/', 
        changeOrigin: true,
        pathRewrite: {
            '^/wcwc': ''
        }
      },         
    },     
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
