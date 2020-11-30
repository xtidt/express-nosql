//引入mongoose.js 文件
const mongoose = require('../lib/mongoose')
//引入schema.js 文件
const courseSchema = require('./courseSchema')
//定义模型 表名为our
const Course = mongoose.model('Course', courseSchema) // courses

module.exports = Course


