/*
 * @Author: your name
 * @Date: 2021-10-23 14:47:11
 * @LastEditTime: 2021-10-23 18:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/src/index.js
 */

import createElement from './modules.js'
import { timePromise } from './promise.js'
const elementHtml = createElement()

timePromise(100).then(value => {
  console.log('value', value)
})

document.body.append(elementHtml)

// // 解析渲染md
// import html from './index.md'
// const element = document.createElement('div')
// element.innerHTML = html
// document.body.append(element)