const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const fs = require('fs')

app.listen(5000);
console.log("server is listening on 5000")

app.use(bodyparser.urlencoded({extended:true}))


app.get("", (req, res)=>{
    
    res.sendFile(__dirname+'/Que19.html');
})

app.post("", (req, res)=>{

    var name = req.body.name;
    var regno = req.body.regno;
    var grade = req.body.grade;

    var record = ' ' + "Name:" + name + ' ' + "Reg No.:" + regno + ' ' + "Grade:" + grade + '   ' ;


    fs.appendFileSync('student.txt', record);

    res.redirect('/')

})

// ------------------------------------------------------------------------------------------------------

// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.use(bodyParser.urlencoded({extended:true}))

// app.get('',(req,res)=>{
//     res.sendFile(__dirname+"/Que19.html");
// })

// app.post('',(req,res)=>{
//     var name = req.body.nam;
//     var rege = req.body.reg;
//     var grade = req.body.grad;

//     var records = "\n"+"Name: "+ name +" Reg: "+rege+" grade: "+grade;
//     fs.appendFileSync('students.txt',records);

//     res.redirect('/');

// })


// app.listen(5000,(req,res)=>{
//     console.log("server running on port 3000");
// })