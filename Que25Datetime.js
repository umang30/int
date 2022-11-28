// Que - create a basic website using node js 1) display the current date in web page 2) change the color of date using event listener module



var express = require('express');
var app = express();


var datetime = new Date();

app.get('/', (req,res)=>{
    res.send(`<h1> The date and time is : ${datetime} </h1> 
    <script> 
    
    document.body.style.color = "red";

    </script>`)
})


app.listen(5000)