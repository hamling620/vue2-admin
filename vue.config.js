const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configWebpack (config) {

  }
}
