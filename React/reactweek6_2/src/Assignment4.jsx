//my 
import { memo,useCallback, useState } from "react";


export function Assignment4() {
    const [count, setCount] = useState(0);

    // Your code starts here
   const handleIncrement = useCallback(()=>{
    setCount(function(currCount){
        return currCount+1;
    })
   },[])

    const handleDecrement = useCallback(() =>{
        setCount(function(currCount){
            return currCount-1;
        });
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) =>{ 
    console.log("child rendear");
    return (
    
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
)});
