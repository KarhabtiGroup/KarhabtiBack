const Inspection = require('../models/Inspection')
const index=(req, res, next) => 
{
    Inspection.find()
    .then((inspection) =>{res.json({inspection})})
    .catch(error=>{res.json({error})})      
}
const show = (req, res, next) => {
    let inspectionID = req.body.inspectionID
    Inspection.findById(inspectionID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {
    

    let inspection= new Inspection({
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

        
    console.log(inspection)

    inspection.save()
    .then(response => {
        res.json({
            message:'Inspection Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}

//update an Inspection
const update =(req, res, next)=>
{
    let inspectionID=req.body.inspectionID
    let updateData={
        name:req.body.name,
        mecanicien:req.body.mecanicien,
        annonce:req.body.annonce,
        utilisateur:req.body.utilisateur,
        moteur:req.body.moteur,
        transmission:req.body.transmission,
        roues:req.body.roues,
        historique:req.body.historique,
        date:req.body.date
    }
    Inspection.findByIdAndUpdate(inspectionID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Inspection updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an Inspection

const destory=(req,res,next) =>{
    let inspectionID= req.body.inspectionID
    Inspection.findByIdAndRemove(inspectionID)
    .then(()=>{
        req.json({
            message: 'an error Occured!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory

}