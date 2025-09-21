import React, { useState } from "react";
export default function PopupCreation({onClose}) {
    console.log('test')
    return(
        <div className={`fixed top-0 w-screen h-screen bg-black/50`}>
            <div className={`w-1/2 h-2/3 bg-zinc-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl`}></div>
        </div>
    )

}