/*
 * @Author: your name
 * @Date: 2021-10-23 14:47:34
 * @LastEditTime: 2021-10-23 14:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/src/modules.js
 */
export  default () => {
  const element = document.createElement('h1')
  element.textContent = 'webpack demon'
  element.addEventListener('click', () => {
    alert('点击')
  })
  return element
}