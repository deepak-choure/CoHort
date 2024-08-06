//use to define the structure of an object
//let us we gave an object as parameter 
//then we have to write like this
function isLegal(user:{firstName:string,age:number}){
    if(user.age>=18){
        return true;
    } else {
        return false;
    }
}
console.log(isLegal({
    firstName:"Deepak",
    age:21
}))

//But if we use the object multiple times 
//code repetion takes place, voilating the DRY rule 


interface User{
    firstName: string;
    lastName:string;
    email:string;
    age:number;
}
function isadult(user:User){
    if(user.age>=18){
        return true;
    } else{
        return false;
    }
}
function greet(user:User){
    console.log("Hii there"+user.firstName);
}
isadult({
    firstName:"dev",
    lastName:"nigam",
    email:"dn@gmail.com",
    age:21,
})

/**
 * 
 * 
 * **********IMPLEMENTING Interface*********
 */
//Interfaces have another special property. You can implement interfaces as a class.
interface Person{
    name:string;
    age:number;
    greet(phrase:string):void
}
class Employee implements Person{   

    //if you are implementing interface than it is necessary to implement all the interface property 
    name: string;//compulsary to initialize at constructor {can't make static as it is implemented from interface}
    age: number;
    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
    
}

