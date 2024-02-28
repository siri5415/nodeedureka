// const { promises } = require("dns");
const fs = require("fs");
const util = require("util");

var read = util.promisify(fs.readFile);

Promise.all(
    [
       read('file1.txt'),
       read('file2.txt'),
       read('file3.txt')
    ]
).then(data =>{
    const [f1,f2,f3] = data;
    console.log(f1.toString());
    console.log(f2.toString());
    console.log(f3.toString());
 }).catch(err =>{
    console.log("Error : " + err);
}).finally(() =>{
    console.log("Read all the files ");
})