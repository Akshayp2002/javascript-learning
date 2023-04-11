var read = require('readline-sync')
var num1 = read.question("enter two number")
var num2 = read.question(" ")

if(num1>num2){
    console.log("num 1 is larger" + num1)

}
else
{
    console.log("num 2 is larger" + num2)
}