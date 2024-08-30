
import Quote from "../components/Quotes";
import Auth from "../components/Auth";

function Signup() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-2">
                <Auth type="signup" />
                <div className="none lg:block">
                    <Quote />
                </div>
            </div>

        </>
    )
}
export default Signup;