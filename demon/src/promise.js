/*
 * @Author: your name
 * @Date: 2021-10-23 15:16:29
 * @LastEditTime: 2021-10-23 15:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/src/promise.js
 */
const timePromise = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time, 'done')
  })
}

export {
  timePromise
}