//引入mongoose.js 文件
const mongoose = require('../lib/mongoose')
//引入schema.js 文件
const schema = require('./accountSchema')
//定义模型 表名为our
const AccountModel = mongoose.model('account', schema)
//导出
module.exports = AccountModel
