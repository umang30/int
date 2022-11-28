// Que-  CRUD operation with file FileSystem. 



const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname)

fs.writeFile('./umang.txt', "my name is umang", (err, result)=>{
    console.log('file Created')
})

fs.readFile('./umang.txt', 'utf-8', (err, result)=>{
    console.log('file Read')
    console.log(result);
})


fs.appendFile('./umang.txt', ", hellow this is file append", (err)=>{
    console.log("file appended successfully")
    
})

fs.rename('./umang.txt', './verma.txt', (err)=>{
    console.log('filename updated successfully')
})

fs.unlink('./verma.txt', (err)=>{
    console.log('filename deleted successfully')
})

fs.unlink('./umang.txt', (err)=>{
    console.log('filename deleted successfully')
})

