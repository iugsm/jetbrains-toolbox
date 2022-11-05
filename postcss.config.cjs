const postcssLightningcss = require('postcss-lightningcss')

const config = {
  plugins: [
    postcssLightningcss({
      browsers: '>= .50%',
      lightningcssOptions: {
        sourceMap: true,
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    }),
  ],
}

module.exports = config
