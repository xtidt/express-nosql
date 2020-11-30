const express = require('express')
const router = express.Router()
const fs = require('fs')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// 查询所有
router.get('/view', async function (req, res) {
  const file = './db/1.json'
  if (fs.existsSync(file)) {
    const result = JSON.parse(fs.readFileSync(file).toString())
    res.json(result)
  } else {
    fs.writeFileSync(file, '[]')
    res.json([])
  }
})

router.get('/name', async function (req, res) {
  const file = './db/1.json'
  let result = JSON.parse(fs.readFileSync(file).toString());
  /*
    find() 方法返回通过测试（ 函数内判断） 的数组的第一个元素的值。
    如果没有符合条件的元素返回 undefined
    find() 对于空数组， 函数是不会执行的。
    find() 并没有改变数组的原始值。 
  */
  result = result.find(item => item.user == req.query.name);
  res.json({
      code: 200,
      info: result ? result : {},
  });
})

// 新增
router.post('/add', async function (req, res) {
  //插入数据
  const result = await AccountModel.insertMany({
    user: req.body.user,
    pwd: req.body.pwd
  })
  console.log(result)
  res.send(200, result)
})

// 新增:create
router.post('/create', async function (req, res) {
  //插入数据
  const result = await AccountModel.create({
    user: req.body.user,
    pwd: req.body.pwd
  })
  console.log(result)
  res.send(200, result)
})

// 删除
router.delete('/delete', async function (req, res) {
  // 删除单个
  const result = await AccountModel.findOneAndDelete({
    user: req.body.user
  })
  console.log(result)
  // 删除多个(或所有)
  // AccountModel.deleteMany({}).then(result => console.log(result))
  res.send(200, result)
})

// 更新
router.post('/update', async function (req, res) {
  const _user = req.body.user
  const _pwd = req.body.pwd
  const result = await AccountModel.updateOne(
    { user: _user },
    {
      pwd: _pwd
    }
  )
  console.log(result)
  // 更新多个
  // User.updateMany({查询条件}, {要更改的值}).then(result => console.log(result))
  res.send(200, result)
})

module.exports = router
