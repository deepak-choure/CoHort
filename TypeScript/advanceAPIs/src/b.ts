//3.
const obj = {
    name:"john",
    age:25,
    country:"usa"
}
obj.name = "leo"//we can make change in the object but reference remains same even it is const

type User3 ={
    readonly name:string,
    readonly age:number
}
const user:User3={
    name:"john",
    age:21
}
// user.name= "alice"//error  

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
