const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'contactApp';
//fonction de connexion à la bdd
const dbConnection= function( callback){
    MongoClient.connect(url, function(err,client){
      if(err){
        return
      }
      console.log('Connection au serveur OK');
      const db =client.db(dbName);
      callback(db);
      client.close();
    })
    
}
module.exports= dbConnection;