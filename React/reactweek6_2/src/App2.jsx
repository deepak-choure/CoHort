import React,{useState} from "react";
//**talking about the wrapper child component which wrap other child component  */
 function App2(){

   
    return(
        <>
           {/* <CardWrapper innerComponent={<TextComponent></TextComponent>}></CardWrapper> */}
           <CardWrapper>
            Hii there
           </CardWrapper>
           <CardWrapper>Hello man</CardWrapper>
           <CardWrapper><TextComponent></TextComponent></CardWrapper>
        </>
    )
}
// function TextComponent(){
//     return <div>Hii there</div>
// }
// function CardWrapper({innerComponent}){
//     return(
//         <div style={{border:"2px solid black",margin:"2px"}}>{innerComponent}</div>
//     )
// }


//use childern 
function CardWrapper({children}){
    return(
                 <div style={{border:"2px solid black",margin:"2px"}}>{children}</div>
            )
}
function TextComponent(){
         return <div>Hii there from TextComponent</div>
    }
export default App2