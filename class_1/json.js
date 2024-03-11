const users = '{"name":"harkirat", "age":24,"gender":"male"}';
//JSON.parse
//JSON.stringify

const user = JSON.parse(users);
console.log(user["name"]);