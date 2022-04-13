const express = require('express');
const mongoose = require('mongoose');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const multer = require ('multer');



const UtilisateurRoute=require('./routes/utilisateur')
const AuthentificationRoute=require('./routes/authentification')
const AnnonceRoute=require('./routes/annonce')
const MecanicienRoute=require('./routes/Mecanicien')
const InspectionRoute=require('./routes/inspection')
const TypeRoute=require('./routes/type')
const SponsorsRoute=require('./routes/sponsors');
const Utilisateur = require('./models/Utilisateur');

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
    console.log("Error")
})


db.once('open', () => {
    console.log('Database Connection Established!')
})

const app = express();

app.set("view engine", "ejs")


app.use(morgan('dev'))


app.use(bodyParser.json({
   limit: '50mb'
}));
app.use(bodyParser.urlencoded({
   limit: '50mb',
   extended: true
}));
const PORT = process.env.PORT || 3000


app.get("/add", (req, res)=>{
    res.render("add")
})


app.post("/ajouteru", (req, res) => {
    var utilisateur= new Utilisateur({
        name:req.body.name,
        email:req.body.email,
      
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate,
        adress:req.body.adress

    })
    utilisateur.save()
    console.log("Utilisateur added succesfully");
    res.redirect('/api/utilisateur/index');
    })


    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });

app.use('/uploads',express.static('uploads'));
app.use('/api/inspection',InspectionRoute);
app.use('/api/authentification', AuthentificationRoute)
app.use('/api/utilisateur', UtilisateurRoute)
app.use('/api/mecanicien', MecanicienRoute)
app.use('/api/annonce', AnnonceRoute)

app.use('/api/type', TypeRoute)
app.use('/api/sponsors', SponsorsRoute)

