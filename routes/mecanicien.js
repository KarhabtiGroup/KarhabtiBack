const express = require('express')
const router  = express.Router()
const multer = require ('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname); 
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
const Mecanicien = require('../models/Mecanicien')
const MecanicienController = require('../controllers/MecanicienController')
const mongoose = require('mongoose');



  const upload = multer({storage : storage,fileFilter:fileFilter});


router.get('/index',MecanicienController.index)
router.post('/show',MecanicienController.show)
router.post('/store',MecanicienController.store)

router.post('/store2',upload.single('image'),MecanicienController.store)
router.post('/update',MecanicienController.update)
router.post('/delete',MecanicienController.destory)

router.post("/store1", upload.single('image'), (req, res, next) => {
    const mecanicien = new Mecanicien({
      _id: new mongoose.Types.ObjectId(),
      name:req.body.name,
      email:req.body.email,
      adress:req.body.adress,
      phoneNumber:req.body.phoneNumber,
      birthDate:req.body.birthDate,
      image: req.file.path
    });
    mecanicien
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created mecanicien successfully",
          createdMecanicien: {
              name: result.name,
              email: result.email,
              adress: result.adress,
              phoneNumber: result.phoneNumber,
              birthDate: result.birthDate,
              _id: result._id,
              request: {
                  type: 'GET',
                  url: "http://localhost:3000/mecaniciens/" + result._id
              }
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  



module.exports=router