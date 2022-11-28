// "mongo" is the command-line shell that connects to a specific instance of mongod
// "mongod" is the "Mongo Daemon" it's basically the host process for the database

//Que8:- develop a node js application to create a collection employee in #mongodb and print all the records on the console after inserting the records in employee. 


// var MongoClient =require('mongodb').MongoClient;
// var url= "mongodb+srv://umang3001:umang30@databases.fve3ucg.mongodb.net/test";

// MongoClient.connect(url,function(err,db)
// {
//     if(err)
//     throw err;
//     console.log("Database Connected");

//  var dbe=db.db("data");


// //collection creation
// dbe.createCollection("projecthydra",function(err,data)
// {
//     if(err)
//     throw err;
//     console.log("Collection created");

// })

// var myobj={name:"umang"};


// //insertion
// dbe.collection("projecthydra").insertOne(myobj,function(err)
// {
//     if(err)
//     throw err;
//     console.log("Insertion done");
// })

// //print
// dbe.collection("projecthydra").findOne({},function(err,datamongo)
// {
//     if(err)
//     throw err;
//     console.log("data found");
//     console.log(datamongo);
    
// })
// //delete
// dbe.collection("projecthydra").remove({name: 'umang'},function(err,datamongo)
// {
//     if(err)
//     throw err;
//     console.log(datamongo);
//     console.log("data deleted");
// })


// })


const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://umang3001:umang30@databases.fve3ucg.mongodb.net/test"



MongoClient.connect(url, (err, db)=>{
    if(err) throw err;

    console.log("Data base connected succesfully!...")

    var dbe= db.db("avengers");

    dbe.createCollection("infinityWar", (err, data)=>{
        if (err) throw err;

        console.log("Collection Created successfully!...")
    })

var myobj = { name: "Ironman"};

    dbe.collection("infinityWar").insertOne(myobj, (err)=>{
        if (err) throw err;

        console.log("data inserted successfully!...")
    })


    dbe.collection("infinityWar").findOne({}, (err,datamongo)=>{
        if (err) throw err;

        console,log("object found!...")
        console,log(datamongo)
    })



})