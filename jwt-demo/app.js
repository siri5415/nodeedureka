const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const port = 5100;

app.post('/login', (req,res)=>{
    const {
        username,
        password
    } = req.body;
     
    //TODO : logic to connect to DB and verify the user
    if (username == 'admin' && password == 'admin'){
   //generate the token
   const payload={
    name:'Siri',
    email:'Sirisha@gamil.com',
    course:'Nodejs'
   }
   jwt.sign(
      payload,
      
   )
    }else{
        // return 401
        res.status(401).json({error: 'Invalid username or password'});
    }
});
app.listen(port, ()=>{
    console.log('App running on port : ${port}');
})

