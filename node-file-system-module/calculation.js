const yargs = require('yargs');
var a = parseInt(process.argv[2]);
var b = process.argv[3];
var c = parseInt(process.argv[4]);
  letresult = 0;
switch(b){
  case '+' :
  result = a+c  ;
  break;
  case '-' :
    result = a-c  ;
    break;
    case '/' :
        result = a/c  ;
        break;
        case '*' :
            result = a*c  ;
            break;
             default:
                result = undefined;     
}
// console.log("0th index : " + process.argv[0]);
// console.log("1st index : " + process.argv[1]);
console.log("Answer is :" + result);
console.log(yargs.argv._);