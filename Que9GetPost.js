// GET and POST are standard HTTP requests used to create REST APIs
// When sending or receiving a significant amount of data, POST and GET requests are needed

// GET method is used to request data from the server but mainly this method is used to read data
// It is more efficient and popular than the POST
// method

// POST method is used to create new or to edit already existing data
// This method allows you to communicate massive amounts of data
// The POST method is secure because the data is not visible in the URL bar, it is not as widely utilized as the GET method


// create a node js application which demonstrate the use of get and post method using express.



const express =require('express');

const app=express();

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log("server is running")
});


app.get('/getRequest', (req,res)=>{
    res.send("hellow this is get method")
});

app.post('/postRequest', (req, res)=>{
    res.send("hello this is successfull post request")
}); // post only work with postman