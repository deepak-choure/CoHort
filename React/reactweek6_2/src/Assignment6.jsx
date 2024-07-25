import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.
function Assignment6(){
    let inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus()
    },[inputRef])
    const handleButtonClick = ()=>{
        inputRef.current.focus()
    }
    return(
        <>
        <input type="text" placeholder="Enter text here" 
        ref={inputRef}
        />
        <button onClick={handleButtonClick}>Focus to input</button>
        </>
    )
}
export default Assignment6;