/*
 * @Author: your name
 * @Date: 2021-07-05 11:06:27
 * @LastEditTime: 2021-07-05 11:12:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /glodon/plugin/geip-search/webpack.prod.js
 */
const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/plugins/index.js',
    module: {
        // rules: [
        //     {
        //         test: /\.ts$/,
        //         loader: 'ts-loader',
        //         exclude: [/node_modules/, /Demo/]
        //     },
        // ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'Search',
        libraryTarget: "umd"
    },
    optimization: {
        // minimizer: [new UglifyJsPlugin()]
    }
};
