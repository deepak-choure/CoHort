import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

function App5(){
    return(
        <>
        <RecoilRoot>
            <Counter></Counter>
        </RecoilRoot>
        </>
    )
}
//Atom
const countState = atom({
    key:"counterState",
    default :0
})
//Selector
const evenOddState = selector({
    key:"isevenSelector",
    get:({get})=>{
        const count = get(countState)
        return count%2==0;
    }
})
function Counter(){
    const [count , setCount]=useRecoilState(countState);
    const iseven = useRecoilValue(evenOddState);
    return(
        <>
        <div>{count}</div>
        <button
        onClick={()=>setCount(count+1)}
        >
            Increment
        </button>
        <button
        onClick={()=>setCount(count-1)}
        >
            Decrement
        </button>
        <div>
            {iseven ? "it is even": null}
        </div>
        </>
    )
}
export default App5;