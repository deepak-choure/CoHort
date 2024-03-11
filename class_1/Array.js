const initialArray = [1,2,3];
const secondArray = [4,5,6];
const newArray = initialArray.concat(secondArray);
console.log(newArray);

function logThing(str){
    console.log(str);

}

initialArray.forEach(logThing)

logThing(1)
logThing(2)
logThing(3)

for( let i =0;i<initialArray.length;i++){
    console.log(initialArray[i]);
}

