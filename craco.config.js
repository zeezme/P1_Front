const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: {
    plugins: [
      new Dotenv({
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, '.env'),
        safe: true,
        systemvars: true,
        silent: true,
        defaults: false
      })
    ],
    resolve: {
      fallback: {
        fs: false, // or require.resolve("browserify-fs")
        os: false, // or require.resolve("os-browserify/browser")
        path: false // or require.resolve("path-browserify")
      }
    }
  }
}
