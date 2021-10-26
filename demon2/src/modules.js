/*
 * @Author: your name
 * @Date: 2021-10-26 19:45:23
 * @LastEditTime: 2021-10-26 19:46:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/demon2/src/modules.js
 */
export  default () => {
  const element = document.createElement('h1')
  element.textContent = 'webpack demon'
  element.addEventListener('click', () => {
    alert('点击')
  })
  return element
}