const path = require('path')

module.exports = {
    port: 3000,
    proxyTable: {
        '/api': {
            target: 'http://api.douban.com/v2',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}