//Que -  Create a readable stream using fs modile and demostrate its working and create writable stream using fs module and demonstrate its working.

const fs = require('fs')


fs.writeFileSync('./new.txt' , " hellow this is todays que's answer")

var text = fs.readFileSync('./new.txt' , 'utf-8')

console.log(text);