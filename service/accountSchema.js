//引入mongoose.js文件
const mongoose = require('../lib/mongoose.js')
//定义schema
const schema = mongoose.Schema
const account = new schema({
  // 这里是数据库自己创建的属性名：他的属性类型   如：
  user: { type: String, require: true },
  pwd: { type: String, require: true }
})
//导出
module.exports = account
