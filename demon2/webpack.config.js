/*
 * @Author: your name
 * @Date: 2021-10-23 15:25:15
 * @LastEditTime: 2021-10-23 19:01:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/webpack.config.js
 */

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  }
}

module.exports = config