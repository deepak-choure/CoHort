// const currDate = new Date();
// console.log("Current Date: ",currDate);
// console.log("Year: ",currDate.getFullYear());
// console.log("Month:",currDate.getMonth());
// console.log("Date:",currDate.getDate());
// console.log("Date:",currDate.getHours());
// console.log("Date:",currDate.getMinutes());
// console.log("Date:",currDate.getSeconds());
// console.log("Time in millisecond since 1970: ",currDate.getTime());
// console.log(currDate.toUTCString());


function getSum() {
    let a =0;
    for(let i =0;i<100000;i++){
        a =a+i;
    }
    return a;
}

const Before = new Date();
const beforeTimeMS = Before.getTime();
getSum();
const After = new Date();
const afterTimeMS = After.getTime();
console.log("Time taken is ",afterTimeMS-beforeTimeMS);