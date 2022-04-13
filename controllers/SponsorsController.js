const Sponsors = require('../models/Sponsors')
const index=(req, res, next) => 
{
    Sponsors.find()
    .then(reponse =>{
        res.json({
        response
         })
    })
 .catch(error=>{
     res.json({
        error
    })
 })   
}

const show = (req, res, next) => {
    let sponsorsID = req.body.sponsorsID
    Sponsors.findById(sponsorsID)
    .then(reponse => {
        res.json({
            reponse
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {

    let sponsors= new Sponsors({
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate
    })
    Sponsors.save()
    .then(response => {
        res.json({
            message:'Sponsors Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an Sponsors
const update =(req, res, next)=>
{
    let sponsorsID=req.body.sponsorsID
    let updateData={
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate
    }
    Sponsors.findByIdAndUpdate(sponsorsID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Sponsors updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an Sponsors

const destory=(req,res,next) =>{
    let sponsorsID= req.body.sponsorsID
    Sponsors.findByIdAndRemove(sponsorsID)
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