const express = require('express')

const app = express();

const port = 5000;

app.get('/',(req,res)=>{
    const CourseDetails = {
        track : 'NodeJs',
        duration : 30
    }
    const resObj = {
        name : 'Edureka',
        ...CourseDetails
    }
    // res.send('Hi,From Server');
    res.status(200).json({ result : resObj });
})

app.listen(port,()=>{
    console.log(`App running on port : ${port}`);
})