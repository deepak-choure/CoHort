//2.Partial 
//problem:- if user don't send all argument given in function then it need to be partial
//it makes the keys optional age?

interface User2{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}
type UpdateKeys2 = Pick<User2,"name"|"age"|"email">
type UpdatePropsOptional = Partial<UpdateKeys2>

function updateDetails2(params:UpdatePropsOptional){
    console.log(`${params.age} ${params.email} ${params.name}`)
}
updateDetails2({name:"deepak"})//undefined undefined deepak