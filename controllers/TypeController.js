const Type = require('../models/Type')
const index=(req, res, next) => 
{
    Type.find()
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
    let typeID = req.body.typeID
    Type.findById(typeID)
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

    let type= new Type({
        name:req.body.name,
    })
    type.save()
    .then(response => {
        res.json({
            message:'Type Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an Type
const update =(req, res, next)=>
{
    let typeID=req.body.typeID
    let updateData={
        name:req.body.name,
    }
    Type.findByIdAndUpdate(typeID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Type updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an Type

const destory=(req,res,next) =>{
    let typeID= req.body.typeID
    Type.findByIdAndRemove(typeID)
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