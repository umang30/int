// Que6:-  create a node js application to parse a JSON file and print content of the file on the console. 


//import//
const user = require('./data.json')
//print
console.log(user);

const fs = require('fs')

fs.readFile('./data.json', "utf-8" ,  (err, jsonString)=>{
    if (err){
    console.log("unable to read file")
    return
}
    else 
    console.log("file Data: ", jsonString)

} )

// method 2 parse method

// const fs = require("fs");

// fs.readFile("./data.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const customer = JSON.parse(jsonString);
//     console.log("data is:", jsonString);
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });
