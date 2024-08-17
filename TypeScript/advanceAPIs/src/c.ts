//4.Record
//consider 
// interface User4 {
//     id:string;
//     name:string;
// }

// type Users = {[keys:string]:User4}; 

// const users = {
//     "abc123":{id:"abc123",name:"john Doe"},
//     "xyz456":{id:"xyz456",name:"john Doe"},
// };


//cleaner
interface User4 {
    id?: string;
    age?:number,
    email?:string;
    name?:string
  }
  
 type Users  = Record<string,User4>
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


  //map(js thing) have key value pair like above but better
//earlier we do like 
users["abc123"].id = 'abc@123';

const users2 = new Map<string,User4>();
users2.set("res@12",{name:"Ras",age:21,email:"res@email.com"});
users2.set("sara@ql",{name:"Sarah",age:32,email:"sara@email.com"});

const usr = users2.get("res@12")
console.log(usr)