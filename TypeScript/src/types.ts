//type let u define own type using default ones
type User2 = {
    firstName:string;
    lastName:string;
    age:number

}
// interface User{
//     firstName: string;
//     lastName:string;
//     email:string;
//     age:number;
// }


//features of type
//Unions
//either this or that 
type GreetArg = string | number;
function greet2(id:GreetArg){

}
greet2(1);
greet2("1")

//intersection 
//this and that both
type EmployeeType ={
    name:string;
    startDate:Date;
}
type Manager = {
    name:string;
    department:string;
};

type TeamLead = EmployeeType & Manager;

const t : TeamLead = {
    name:"deepak",
    startDate:new Date(),
    department:"Tech"
}