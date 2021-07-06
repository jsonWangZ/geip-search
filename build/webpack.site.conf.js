/*
 * @Author: your name
 * @Date: 2021-07-06 10:22:30
 * @LastEditTime: 2021-07-06 10:29:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/build/webpack.site.conf.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: './public/*.png', to: '[name].png' },
    ]),
    new CompressionWebpackPlugin(),
  ],
};
