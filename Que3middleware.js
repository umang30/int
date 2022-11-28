//Que) WAP to show the implementation process and middleware in node js. (Done)

var express=require('express');
var app=express();

function middleware(req,res,next)
{  if(!req.query.age)
    res.send("Age daal mc");
   else if(req.query.age<18)
    res.send("Apne baap ko bhej");
    else
    next();
}
// app.use(middleware);

app.get("/",function(req,res)
{
    res.send("This is my ghar ka page");
})

app.get("/savita",middleware,function(req,res)
{
    res.send("nangi photo");
})

app.listen(6969);



