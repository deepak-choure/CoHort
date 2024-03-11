const person = {
    Name: "Deepak",
    rollno: 42,
    isMarried: false,
    isVargin: true,
}
console.log(person);
const obj ={};
const firstname = "John";
const age = 30;
obj[firstname]="rohit";//here john will passed as key and "rohit" is value
obj[age]=23;//and 30 is passed as key also and 23 is its value
console.log(obj);

const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

let keys = Object.keys(obj);
console.log("After Object.keys() : ",keys);

let value = Object.values(obj);
console.log("Values in object:",value);

let entries = Object.entries(obj);
console.log("All entries in array ",entries);


let hasPrp = obj.hasOwnProperty("key2");
console.log("have key2 property :",hasPrp);

let newObj = Object.assign({},obj,{newPrp: "newValue"});
console.log("After adding new property: ",newObj);



