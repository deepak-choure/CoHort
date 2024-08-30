"use client";

import { ReactNode } from "react";

export const Signup = () => {
    return (
        <>
            <div style={{ width: "100vh", justifyContent: "center", display: "flex" }}>
                <div style={{ width: 400, border: "1px solid black" }}>
                    <input type="text" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <button>Submit</button>
                </div>
            </div>


        </>
    )
}