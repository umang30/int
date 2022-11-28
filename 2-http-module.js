// HTTP module

//  const http = require('http')

//  const server = http.createServer((req, res) => {
    
//     res.write("welcome here")
//     res.end()
//  })

//  server.listen(5000)
 
 
const http = require('http')

const server = http.createServer((req, res) => {
   
   if( req.url=== '/about') {
       res.end(' This is new world')
   }
   if( req.url=== '/html') {
       res.end(' This is html page')
   }

   // res.end(` <h1> hellow world </h1> `) 
})

server.listen(5000)