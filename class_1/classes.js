const dog ={
    name:"doggie",
    legCount: 2,
    speaks: "bhowbhow"
    

}
const cat ={
    name:"pussy",
    legCount: 2,
    speaks: "meow"


}
console.log(dog["name"])
console.log(dog["legCount"])
console.log(dog["speaks"])
console.log(cat["name"])
console.log(cat["legCount"])
console.log(cat["speaks"])

//it is observed that both obj have same framework (or structure) 
//so we can create a blue print of object and use it multiple time


class Animal {
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount= legCount;   
        this.speaks = speaks;

    }
    static intro(){
        console.log("Hii I am an Animal nice to meet you ;)");
    }
    speak(){
        console.log("hi there "+this.speaks);
    }
}

let dogObj = new Animal("dog", 4 , "BhowBhow");
let catObj = new Animal("cat", 4 , "Meow");
dogObj.speak();
catObj.speak();
Animal.intro();
