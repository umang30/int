// Que- Create a student detail page and use mongo db env and adminstering datavase to store the student data.

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://umang3001:umang30@databases.fve3ucg.mongodb.net/test"

MongoClient.connect(url, ()=>{
    if (err) throw err;

    else {
        console.log("database connnected")
    }

    var dbe=db.db("");



})