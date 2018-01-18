const sassResourceLoaderConfig = require('./sass-resources-loader.config')
module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  loaders: {
    scss: [ 'vue-style-loader', 'css-loader', 'sass-loader', sassResourceLoaderConfig]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  transformToRequire: {
      video: 'src',
      source: 'src',
      img: 'src',
      image: 'xlink:href'
  }
}
