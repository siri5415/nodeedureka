const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./Routes/index');

const app = express ();
app.use(bodyParser.json());

const connectionString ="mongodb+srv://sirisha:soCImRZFZiDoLerd@cluster0.38gnkly.mongodb.net/"
  const port = 4400;

  app.use('/',router)
mongoose.connect(
   connectionString,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true
   }
).then(() => {

    console.log('Successfully connected to Mongodb');

    app.listen(port, () =>{
        console.log(`Server up and running on port ${port} `);
    })

}).catch(err => console.log(err));