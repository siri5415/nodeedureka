//console.log("This file created using npm");

// const operatingsystem = require('os'); //in bulit modules
// const filesystem = require('fs'); // in bulit modules
// const path = require('path'); // in bulit modules
// const http = require('http'); // in bulit modules
// const url = require('url'); // in bulit modules
 const sum = require('./sum'); // user defined modules  
 const express = require('express'); //npm modules


// console.log("Architecture :" + operatingsystem.arch());
// console.log("release :" + operatingsystem.release());
// console.log("platform :" + operatingsystem.platform());


// fs.writeFileSync("textData.txt","I Like Nodejs");

// const location = 'C:\Users\hp\OneDrive\Desktop\nodeedureka\package.json';
// console.log("Directory: " + path.dirname(location));
// console.log("Extension: " + path.extname(location));
// // console.log("Base: " + path.basename(location));

// const buf1 = Buffer.from([1,2,3,4,5,6]);
// const buf2 = Buffer.from(['a','b','c']);

// console.log("To String:", buf1.toString());
// console.log("Compare:", Buffer.Compare(buf1,buf2));
// console.log("Wetherequal:",buf1.equal(buf2));

// const address ="https://learning.edureka.co/classroom/recording/843/7819/1487077?tab=CourseContent"

// const q = url.parse(address,true)
// console.log("host:" + q.host);
// console.log("path:" + q.pathname);
// console.log("Queryparams:" + q.search);
// console.log("protocol:" + q.protocol);

 console.log("Sum of 10 and 20 is : " +sum(10,20));

// http.createServer((request,response)=>{
//     const url = request.url;
//     response.writeHead(200);
//     if(url == '/login') {
//         response.write("welcome to the application");
//     }
//     if(url == '/products') {
//         response.write("Here is the list of products : apple, orange, car");
//     }
//     if(url == '/logout') {
//         response.write("You are logged out,Bye");
//     }
//     if(url == '/'){
//         response.write("Please send a valid request");
//     }
//     response.end();
// }).listen(3000); 

const port = 3400;
const app = express();
app.listen(port,()=>{
    console.log('Sever is up and running on port ${port}');
});