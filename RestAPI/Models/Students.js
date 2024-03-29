const mongoose = require('mongoose');

//initialize the schema of the collection
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    Name: {
        type: String
    },
    "Roll No" : {
        type:Number
    },
    class:{
        type: Number
    }
});


//create and exports the model using the schema 
module.exports= mongoose.model('Student',StudentSchema,'Students');