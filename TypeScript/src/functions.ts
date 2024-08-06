//function 1 
//Thing to learn - How to give types to arguments of a function
function greetfn(firstName: string) {
    console.log("Hello " + firstName);
}

greetfn("harkirat");


//Thing to learn - How to assign a return type to a function
const sum = (a: number, b: number):number => {
    return a + b;
}
console.log(sum(2,3))

//Thing to learn - Type inference(automatically understand what it return)
function isLegalage(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegalage(2));


//passing function as parameter
function outerFn(fn: { (): number}) {
    setTimeout(() => {
        fn()
    }, 1000);
}
outerFn(function returnsomething() {
    console.log("hello")
    return 2;
})


//when inner function also takes arguments
const doSomething = (a:number,fn:{(x:number):number}) => {
    fn(a)
    return 5;
}




