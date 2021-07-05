/*
 * @Author: your name
 * @Date: 2021-01-08 10:58:34
 * @LastEditTime: 2021-07-05 09:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/glodon/gdmp-web/packages/integrate/babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "@geip/basic-components",
        "styleLibraryName": "theme-default"
      }
    ]
  ]
}
