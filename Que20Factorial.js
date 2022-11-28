// Que- Create a web server application with http module for the following scenario
// a) Create a server node.js application using http module to find the factorial of a number
// b) Accept a number from the input text field of the client page and provide the output response with the click event on a button.



// var http = require('http');
// var fs = require('fs');

// function onRequest(req, res){

//     console.log("USER MADE A REQUEST. " +req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var readStream = fs.createReadStream(__dirname + '/Que20.html','utf8'); 
    
// /*include your html file and directory name instead of <<__dirname + '/index.html'>>*/

//     readStream.pipe(res);

// }

// http.createServer(onRequest).listen(7000);

// -------------------------------------------------------------------------------------------------------------------

const http = require("http");


http.createServer((req, res)=>{
    res.write(`<body>
    
    <h1> factorial finder</h1>
    
    
    Enter a number : <input type="number" id="fnum">
    <br> <br>
    
    
    <button id="btn" onclick="factorial()"> Calculate </button>
    <button id="btn2" onclick="clear()"> Clear </button>
    
    </body>
    
    <script>
    
    function factorial() {
        var fnum = document.getElementById("fnum").value;
        f=1;
        for(i=1; i<=fnum; i++)
        f*=i
    
        document.getElementById("fnum").value = f ;
    }
    
    function clear() {
        document.getElementById("fnum").value = " ";
    }
    
    </script>
    `);
    res.end();
}).listen(5000);