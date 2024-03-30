const express = require('express');
const fs = require('fs');
const app = express();

const port = 3400;


app.get('/login',(request,response)=>{
     response.send('<h1>Welcome to Login Page</h1>')
})

app.get("/Products", (request, response) => {
    // console.log(request);
    fs.readFile('Products.json',(err,data)=>{
        if (err){
           throw err;
        }else{
          response.send(JSON.parse(data));
        }
    })
});

app.get("/", (request, response) => {
  response.send("<h1>Welcome to Express Server</h1>");
});


app.listen(port, (err) =>{
    if(err) throw err;
    console.log(`server is up and running on port : ${port}`);
});