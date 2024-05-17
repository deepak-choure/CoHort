import { atom, selector } from "recoil";
import axios from "axios";
// export const networkAtom = atom({
//     key:"networAtom",
//     default: 104
// })
// export const jobsAtom = atom({
//     key:"jobsAtom",
//     default:0
// })
// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// })
// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// })

//converting into one
// export const notifications = atom({
//     key:"Notifications",
//     default:{
//         network:102,
//         jobs:12,
//         notifications:10,
//         messaging:10
        
//     }
// })

//using backend call to get the data
export const notifications = atom({
    key:"Notifications",
    default: selector({
        key:"NotificationsSelector",
        get: async ()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
    
})