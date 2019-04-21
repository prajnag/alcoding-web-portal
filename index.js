var db = require('mongodb').db;
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Result_Analysis", { useNewUrlParser: true }, function (err, db) {
   
    if (err) return;
    var collection = db.Result_Analysis.student;
      collection.find({SRN: 'PES1201701261'}).toArray(function(err, docs) {
        console.log(docs[0])
        db.close()
      })
db.close();
                
});