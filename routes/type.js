const express = require('express')
const router  = express.Router()

const TypeController = require('../controllers/TypeController')

router.get('/',TypeController.index)
router.post('/show',TypeController.show)
router.get('/',TypeController.index)
router.post('/store',TypeController.store)
router.post('/update',TypeController.update)
router.post('/delete',TypeController.destory)

module.exports=router