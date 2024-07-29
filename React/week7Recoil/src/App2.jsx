
import React from "react"
import { useRecoilValue,atom,RecoilRoot } from "recoil"
//Atoms
//individual for each state
const networksAtom = atom({
    key:"networks",
    default: 104
})
const jobsAtom = atom({
    key:"jobs",
    default:2
})
const notificationsAtom = atom({
    key:"notification",
    default:12
})
const MessagingAtom = atom({
    key:"messaging",
    default:0
})
function App2(){
    return (
        <>
        <RecoilRoot>
            <Notification></Notification>
        </RecoilRoot>
        </>
    )
}
function Notification(){
    const networks = useRecoilValue(networksAtom)
    const jobs = useRecoilValue(jobsAtom);
    const messaging = useRecoilValue(MessagingAtom)
    const notifications = useRecoilValue(notificationsAtom)
    return(
        <>
        
        <button>Home</button>
        <button>My networks: {networks>=100 ?"99+":networks}</button>
        <button>jobs {jobs}</button>
        <button>Messaging {messaging}</button>
        <button>Notification {notifications}</button>
        <button>Me </button>
        </>
    )
}
export default App2;