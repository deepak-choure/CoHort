import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {  notifications } from "./Atoms";
import { totalNotification } from "./Selectors";
// import { AvatarCount } from "./Selectors";


function App(){
 return (
 <RecoilRoot>
  <MainApp></MainApp>
  
 </RecoilRoot>
 )
}
function MainApp(){
  // const networkCount = useRecoilValue(networkAtom);
  // const jobsAtomCount = useRecoilValue(jobsAtom)
  // const notificationAtomCount = useRecoilValue(notificationAtom);
  // const messagingAtomCount = useRecoilValue(messagingAtom);
  // const totalCount = useRecoilValue(AvatarCount)
  

  //new Recoil state
  const [notificationCount,setNotificationCount]= useRecoilState(notifications)
  const [totalNotificationCount, setTotalNotificationCount] = useRecoilState(totalNotification)
  return(
    <>
    <button>Home</button>
    <button>My network ({notificationCount.network >=100 ? "99+":notificationCount.network}) </button>
    <button>Jobs ({notificationCount.jobs})</button>

    <button>Messaging ({notificationCount.messaging})</button>
    <button>Notification ({notificationCount.notifications})</button>
    <button >Me ({totalNotificationCount}) </button>
    </>
  )
}
export default App;