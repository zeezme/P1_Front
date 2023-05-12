const path = require('path')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      fs: require.resolve('browserify-fs'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'),
      path: false
    }
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
