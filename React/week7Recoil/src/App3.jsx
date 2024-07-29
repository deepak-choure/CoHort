//Asynchronous data query
/**
 * Recoil also can perform async data fetching.
 * the atom can't perform async operation
 * It is done by the selector thing.
 * we notice that it has get: method
 * now function associated with get can be async 
 * where async task can be performed.
 * But But if query base on parameter.
 * then selectorFamily is used in place of selector.
 * just change the selector to selectorFamily.
 * other thing is same as prev.
 * also if the default value of atm is also come from the backend then 
 * we can pass whole selector as default to atom
 */
import axios from "axios";
import React from "react";
import { useRecoilValue, atom, RecoilRoot, selector, useRecoilState } from "recoil";

// Atoms

// Compressing all state into one state for next level
const notificationsState = atom({
    key: "Notification",
    default: {
        "network": 7,
        "jobs": 0,
        "messaging": 8,
        "notifications": 4
    }
})



// Using selector
const totalNoti = selector({
    key: "totalNotification",
    get: ({ get }) => {
        const notificationState = get(notificationsState);
        return (
            notificationState.jobs +
            notificationState.messaging +
            notificationState.network +
            notificationState.notifications
        );
    }
});

function App3() {
    return (
        <>
            <RecoilRoot>
                <Notification />
            </RecoilRoot>
        </>
    );
}

function Notification() {
    const [Allnotifications, setAllnotification] = useRecoilState(notificationsState);
    const totalnotificationSum = useRecoilValue(totalNoti);



    return (
        <>
            <button>Home</button>
            <button>My networks: {Allnotifications.network >= 100 ? "99+" : Allnotifications.network}</button>
            <button>jobs {Allnotifications.jobs}</button>
            <button>Messaging {Allnotifications.messaging}</button>
            <button>Notification {Allnotifications.notifications}</button>
            <button>Me {totalnotificationSum} </button>
        </>
    );
}

export default App3;
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ****************After that in projectreact React recoil***/