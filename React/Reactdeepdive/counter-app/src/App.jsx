import { useState } from 'react'

// import './App.css'

//two thing require state , components
//state
// let state ={
//   count :0//surprice!!!! the state is not define like that as it is just an object to react how it is looked 
// }

//component 
function App() {
  const [count, setCount] = useState(0)//the 2 values return by useState(0) is taken by count and setCount resp[1,2]
  // console.log(count)
  // console.log(setCount)
  // function onClickHandler(){

  //   // count = count +1;//not a way 
  //   //right way
  //   setCount(count +1);
    
  // }
  return (//render everything present here (App function return)
   
    // <div>
    //   <button onClick={onClickHandler}>Counter {count}</button>
    // </div> 
    <CustomButton count = {count} setCount= {setCount}></CustomButton>
    
  )
  

}

//component 
function CustomButton(props){
  function OnClickHandler(){
    props.setCount(props.count +1);
  } 
  return <button onClick={OnClickHandler}>Counter {props.count}</button>
}

export default App;
