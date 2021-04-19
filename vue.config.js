const path = require('path')
// const axios = require('axios')
// const bodyParser = require('body-parser')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@styles', resolve('src/styles'))
  }
}
