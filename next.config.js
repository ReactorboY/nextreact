const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')


module.exports = withPlugins([
    [withCSS]
], {
    webpack: (config,option) => {
        config.module.rules.push({
            test:/\.md$/,
            use:'raw-loader'
        })
      return config  
    },
})