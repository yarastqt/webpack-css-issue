const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_PROD = process.env.NODE_ENV === 'prod'

module.exports = {
  mode: IS_PROD ? 'production' : 'development',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css',
    }),
  ],
}
