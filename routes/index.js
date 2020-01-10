var express = require('express');
var router = express.Router();

//mon premier "module"
var dbConnection= require('../dbConnection');
//Fonction 
const findContacts= function(db, callback){
  db.collection('contacts').find({}).toArray(function(err,docs){

    callback(docs)
  })
}
/* GET home page. permet d'afficher les contacts */
router.get('/', function(req, res, next) {
  dbConnection(function(db){
    findContacts(db, function(contacts){
      res.render('index',{contacts:contacts});
    })
  })
});


module.exports = router;
