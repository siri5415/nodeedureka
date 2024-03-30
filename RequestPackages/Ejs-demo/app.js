const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res) =>{
    res.render(
        'index',
        {
            title:'my home',
            rating: '5 star'
        }
    )
})

app.listen(3454, () =>{
    console.log("Server is running on port : 3454");
});