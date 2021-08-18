const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
  
}