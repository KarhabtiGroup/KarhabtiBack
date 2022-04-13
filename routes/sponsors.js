const express = require('express')
const router  = express.Router()

const SponsorsController = require('../controllers/SponsorsController')

router.get('/',SponsorsController.index)
router.post('/show',SponsorsController.show)
router.get('/',SponsorsController.index)
router.post('/store',SponsorsController.store)
router.post('/update',SponsorsController.update)
router.post('/delete',SponsorsController.destory)

module.exports=router