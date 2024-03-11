let firstName = "Deepak";
let age =18;
let isMarried =true;
//let ,var , const , if , if-else , for 
if (isMarried) {
    console.log(firstName+ " is married");
}
else{
    console.log(firstName+ " is not married");
}
let answer =0;
for(let i =0;i<10;i++){
    answer = answer +i;
}
console.log(answer);
answer =0;

answer = answer+0;
answer = answer+1;
answer = answer+2;
answer = answer+3;
answer = answer+4;
answer = answer+5;
answer = answer+6;
answer = answer+7;
answer = answer+8;
answer = answer+9;
console.log(answer);


let person1 = "deepak";
let age1 = 20;
let gender1 = "male";

let person2 = "harkirat";
let age2 = 23;
let gender2 = "male";

let person3 = "Vedeka";
let age3 = "20";
let gender3 = "female";

const personArray = ["deepak" , "raman" , "kirat","vedeka"];
const genderArray = ["male", "male", "male", "female"];
const ages = [21, 22, 23, 24, 25,26  ];
const numberOfUser = personArray.length;
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);
for(let i =0;i<numberOfUser;i++){
    if(genderArray[i] == "male"){
       // console.log(personArray[i]);

    }
}

const user1 = {
    firstName: "harkirat",
    gender: "male"
}
//console.log(user1["gender"]);


const allUser = [{
    firstName: "deepak",
    gender: "male"
},{
    firstName: "raman",
    gender: "male"
},{
    firstName: "vedeka",
    gender: "female"
}];

for(let i =0;i<allUser.length;i++){
    if(allUser[i]["gender"]== "male"){
        console.log(allUser[i]["firstName"]);
    }
}


