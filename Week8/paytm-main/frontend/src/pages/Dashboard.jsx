import React from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
function Dashboard() {
    return (
        <>
            <Appbar></Appbar>
            <Balance ></Balance>
            <Users></Users>
        </>
    )
}
export default Dashboard;