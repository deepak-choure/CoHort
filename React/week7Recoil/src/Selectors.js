import { selector } from "recoil";
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom,  } from "./Atoms";
import { notifications } from "./Atoms";
// export const AvatarCount = selector({
//     key:'AvatarCount',
//     get : ({get})=>{
//         const totalCount = get(networkAtom)+get(notificationAtom)+get(jobsAtom)+get(messagingAtom)
//         return totalCount;
//     }
// })

//new selector
export const totalNotification = selector({
    key:"totalNotifications",
    get:({get})=>{
        const allnotification = get(notifications);
        return allnotification.jobs+
        allnotification.network+
        allnotification.notifications+
        allnotification.messaging
    }
})