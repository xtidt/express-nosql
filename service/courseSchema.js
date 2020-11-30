var mongoose = require('../lib/mongoose.js')
//定义schema
var schema = mongoose.Schema

// 创建集合规则
const courseSchema = new schema({
  name: String,
  author: String
})

module.exports = courseSchema
