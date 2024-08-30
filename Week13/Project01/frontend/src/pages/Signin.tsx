
import Quote from "../components/Quotes";
import Auth from "../components/Auth";

function Signin() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                <Auth type="signin" />
                <div className="">
                    <Quote />
                </div>
            </div>
        </>
    )
}


export default Signin;