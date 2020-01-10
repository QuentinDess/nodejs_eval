var express = require('express');
var router = express.Router();
const ObjectId =require('mongodb').ObjectId
//mon premier "module"
var dbConnection= require('../dbConnection');
// route pour ajouter un contactu

router.post('/', function(req,res,next){
    let name =req.body.name;
    let surname=req.body.surname;
    let avatar=req.body.avatar;
    let numberGSM=req.body.numberGSM;
    let numberFix=req.body.numberFix;
    let mail= req.body.mail;
    dbConnection(function(db){
        db.collection('contacts')
            .insertOne({
                "name": name,
                "surname":surname,
                "avatar":avatar,
                "numberGSM":numberGSM,
                "numberFix": numberFix,
                "mail":mail,
                "date": new Date(),
                "comments":"",
            })
            res.status(201).json({
                message: 'Contact créé'
            })
    })
})
//route pour afficher un contact en particulier
router.get('/:id', function(req,res,next){
    dbConnection(function(db){
        db.collection('contacts').findOne({_id : new ObjectId(req.params.id)},null,function (err,contact) {
            res.render('contact', { contact:contact});
        })
       
    })
})
//route pour post une note
router.post('/:id/comments',function(req,res,next){
    dbConnection(function(db){
        db.collection('contacts')
            .updateOne({_id: new ObjectId(req.params.id)}, {$set: {comments: req.body.comment}})
        res.end();
    })
})

// route pour put update
router.put('/:id', function(req,res,next){
    dbConnection(function(db){
        db.collection('contacts')
            .updateOne({_id: new ObjectId(req.params.id)},{ $set:{
                "name": req.body.name,
                "surname":req.body.surname,
                "numberGSM":req.body.numberGSM,
                "numberFix": req.body.numberFix,
                "mail":req.body.mail,
                "date": new Date(),
            }} )
        res.end();
    })
})

module.exports = router;
