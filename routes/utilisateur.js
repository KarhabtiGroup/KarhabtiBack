const express = require('express')
const router  = express.Router()

const UtilisateurController = require('../controllers/UtilisateurController')

router.get('/index',UtilisateurController.index)
router.post('/show',UtilisateurController.show)
router.get('/',UtilisateurController.index)
router.post('/store',UtilisateurController.store)
router.post('/update',UtilisateurController.update)
router.post('/delete',UtilisateurController.destory)

module.exports=router