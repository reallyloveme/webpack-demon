/*
 * @Author: your name
 * @Date: 2021-10-23 17:16:48
 * @LastEditTime: 2021-10-23 17:59:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack-demon/loader/loader-md.js
 */
const marked = require('marked')
module.exports = source => {
  // 加载的模块内容
  console.log('source', source)
  // return 'loader md'
  const html = marked(source)
  // console.log(JSON.stringify(html))
  // return `document.body.append(${html})`
  // const code = `export default ${JSON.stringify(html)}`
  // console.log('code', code)
  // return code
  return `${html}`
}
