function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
  // displayResult(result);
 fnToCall(result);

}
function displayResult(data){
    console.log("Result of the sum is ",data);
}
function displayResultPassive(data) {
    console.log("Sum's result is : ",data);
}
//call only one function to print sum in above format 
// 1. 
//change sum's defination


//2.
//callback
//const ans = sum(1,2,displayResult);

function febb(n){
//give the febbonacci series starting from o indexing
    let a =0;
    let b=1;
    let c =0;
    console.log(a);
    console.log(b);
    for(let i =2;i<=n;i++){
        c = a+b;
        a=b;
        b=c;
        console.log(c);
    }
    }
    febb(12);


function findindexOf(str,target){
    console.log("Original String: ", str);
    console.log("Index: ", str.indexOf(target));
     
}
findindexOf("Hello World ", "World");

const str = "Deepak Choure";
let ans = str.slice(0,5);
console.log(ans);
console.log(str.replace("Deepak", "Deepika"));

const value = "hi my name is Deepak";
const words = value.split("a");
console.log(words);

const para = "    deepak          Choure"
console.log(str.trim());



