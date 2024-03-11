function af(cb){
 setTimeout(cb,2000);
}

// function hi(){
//     console.log("Hii");
// }
af(function(){
    console.log("Hii");
});

function af2(){
    let p = new Promise(function(resolve){
       setTimeout(resolve("hii"),2000);
    });
    
   return p;
}

// function onDone(){
//     console.log("hii");
// }
 af2().then(function(value){console.log(value)});