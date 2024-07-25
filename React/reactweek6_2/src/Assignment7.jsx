import { useRef, useState } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.
function Assignment7(){
    const [ count,setCount] = useState(0)
const numberOfTimeReRendered = useRef(0);
const handleButtonClick = ()=>{
setCount(count+1);
    
}
numberOfTimeReRendered.current++;
    return(
        <>
        <p
        >this Component has rendered {numberOfTimeReRendered.current} times</p>
        <button   onClick={handleButtonClick}>Click to rerender the component</button>
        </>
    )
}
export default Assignment7;