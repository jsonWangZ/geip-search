/*
 * @Author: your name
 * @Date: 2021-07-06 10:22:30
 * @LastEditTime: 2021-07-06 11:00:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/build/webpack.config.js
 */
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const libConfig = require('./webpack.lib.conf');
const siteConfig = require('./webpack.site.conf');

module.exports = (env) => {
  const baseConfig = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|bmp)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024 * 8,
                esModule: false,
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                outputPath: 'fonts',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
  };
  return merge(baseConfig, libConfig);
  // if (env.lib) {
  //   return merge(baseConfig, libConfig);
  // }
  // if (env.site) {
  //   return merge(baseConfig, siteConfig);
  // }
  // return merge(baseConfig, siteConfig);
};
