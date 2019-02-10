require('dotenv').config()

const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')

const { PORT, NODE_ENV } = process.env

const configuration = withCss(
  withTypescript({
    webpack: config => config,
    // Only exposed to the server.
    serverRuntimeConfig: {},
    // Exposed to both server/client.
    publicRuntimeConfig: {
      isDev: NODE_ENV !== 'production',
      PORT
    }
  })
)

module.exports = configuration
