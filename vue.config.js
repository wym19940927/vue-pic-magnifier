let path = require('path')
module.exports = {
    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        output: {
            filename: 'vue-pic-magnifier.js'
        }
    }
}