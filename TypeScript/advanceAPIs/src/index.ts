// interface User{
//     name:string,
//     age:number
// }
// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age;
// }
// let ans = sumOfAge({name:"alice",age:21},{name:"bob",age:32})
// console.log(ans)

//1. Pick - let u create a type from existing type/interface by using some of their property(Keys);
//problem it solve :- if the type/interface keys grows then no of argument in the function using that keys increase, it is good to define another type/interface.
//also it help to follow DRY principle by not making the another interface of same keys
interface User1{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
// interface updateKys{
//     name:string,
//     age:number
// }
type updateKys = Pick<User1,"name"|'age'|'email'>
function updateDetails(params:updateKys){
//hit the db to update the user
};