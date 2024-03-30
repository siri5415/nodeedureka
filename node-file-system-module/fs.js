//Open the file modules
// ~~~~~~~~~~~~~~~~~~~~~~~
const fs = require('fs');

// fs.open("index.html",'r+',(err,fd) => {
//     if (err) {
//         console.log("Error in Opening the file : " + err);
//     }else{
//         console.log("file descriptor : " + fd);
//         //base on 'file decriptor' you can read the file,write and you can close this file as well.
//         console.log("File opened Successfully !!");
//         fs.close(fd);
//        console.log("File closed Successfully !!");
//     }
// });



//Get the file in file modules
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.stat("index.html", "r+", (err, stats) => {
//   if (err) {
//     console.log("Error in Opening the file : " + err);
//   } else {
//     console.log("Stats are :" + JSON.stringify(stats));
//     console.log("Stats proto is : " + JSON.stringify(stats._proto_._proto_));
//     console.log("is File :" + stats.isFile());
//     console.log("is Directory :" + stats.isDirectory());
//   }
// });


//Wrire the file in file modules
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.writeFile("testpage.txt","we are in 2nd NodeJS class", (err) =>{
//      if (err) {
//         console.log("Error in creating the file :" + err);
//      }else {
//         console.log("Creating the file Successfully !!");
//      }
// })


//Read the file in file modules:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.readFile("testpage.txt", (err,data) => {
//   if (err) {
//     console.log("Error in reading the file :" + err);
//   } else {
//     console.log("File content is : " + data.toString());
//   }
// });


//Rename the file in file modules:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// fs.rename("newname.doc","latestname.rtf", (err) => {
//   if (err) {
//     console.log("Error in renaming the file : " + err);
//   } else {
//     console.log("File renamed  Successfully !!");
//   }
// });


//Append the file in file modules:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  fs.appendFile("index.html","I am learing NodeJs Fs", (err) =>{
//     if (err){
//         console.log("Error in appending the file : " + err);
//     }else{
//         console.log("File appended successfully !!");
//     }
//  })



//Delete the file in file modules:
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
fs.unlink("lastestname.rtf", (err) => {
  if (err) {
    console.log("Error in deleting the file :" + err);
  } else {
    console.log("File deleted successfully !!");
  }
});
