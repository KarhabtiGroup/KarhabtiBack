const express = require('express')
const router  = express.Router()

const InspectionController = require('../controllers/InspectionController')
const Inspection = require('../models/Inspection')
const mongoose = require('mongoose');
router.get('/index',InspectionController.index)
router.post('/show',InspectionController.show)

router.post('/store',InspectionController.store)
router.post('/update',InspectionController.update)
router.post('/delete',InspectionController.destory)


router.post("/store1",  (req, res, next) => {
    const inspection = new Inspection({
      _id: new mongoose.Types.ObjectId(),
      name:req.body.name,
        mecanicien:req.body.mecanicien,
        annonce:req.body.annonce,
        utilisateur:req.body.utilisateur,
        moteur:req.body.moteur,
        transmission:req.body.transmission,
        roues:req.body.roues,
        historique:req.body.historique,
        date:req.body.date
     
    });
    inspection
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created inspection successfully",
          createdMecanicien: {
              name: result.name,
              mecanicien: result.mecanicien,
              annonce: result.annonce,
              utilisateur: result.utilisateur,
              moteur: result.moteur,
              transmission: result.transmission,
                roues: result.roues,
              historique: result.historique,
              date: result.date,
              _id: result._id,
              request: {
                  type: 'GET',
                  url: "http://localhost:3000/inspections/" + result._id
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