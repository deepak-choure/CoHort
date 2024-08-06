type Input = number | string;
function firstEle(arr:Input[]){
    return arr[0];
}
const value = firstEle(["hari","om"]);
//console.log(value.toUpperCase())
//it doesn't allow you to treat value as either number or string

///generics
function identity<T>(arg: T) {
    return arg;
}


let output1 = identity<string>("str");
let output2 = identity<number>(100)
output1.toUpperCase()
output2.toFixed()

//solution for arr
function returnFrst<T>(arr:T[]){
    return arr[0];
}
const op1 = returnFrst([1,2,3]);
const op2 = returnFrst(["hari","om"]);
//no need to explicitly mention it automatically infer


