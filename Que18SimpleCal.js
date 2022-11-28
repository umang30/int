// implement an express application to perform the following operations 
// a) accept two numbers from the input text fields of a user web page and perform the basic operations (+,-,*,/) on those 2 numbers inside a middleware function of server node.js application.
// b) display the output values in the user web page as a response to the click event form 

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))


app.get('',(req,res)=>{
    res.sendFile(__dirname+'/Que18.html')
})

app.post('/',(req,res)=>{
    const n1 = Number(req.body.Fnum)
    const n2 = Number(req.body.Snum)
    if(req.body.add)
    {
        const add = n1+n2;
        res.send("the value is"+add);
    }
    else if(req.body.sub)
    {
        const Sub = n1-n2;
        res.send("the value is"+Sub);
    }

    else if(req.body.div)
    {
        const Div = n1/n2;
        res.send("the value is"+Div);
    }

    else if(req.body.mul){
        const Mul = n1*n2;
        res.send("the value is"+Mul);
    }
    else{
        res.send("click to calculate")
    }

})
app.listen(5000,(res)=>{
    console.log("server started on port 5000");
});
