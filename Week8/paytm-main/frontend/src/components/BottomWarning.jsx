import { Link } from "react-router-dom";

export default function BottomWarning({label,buttonText,to}){
    return(
        <>
        <div>{label}</div>
        <Link to={to} className="pointer underline pl-1 cursor-pointer" >{buttonText}</Link>
        </>
    )
}