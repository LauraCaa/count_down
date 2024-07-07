import "@/assets/try3.css";
import { useState } from "react";
import Display from "@/componets/try3/display";
import Actions from "@/componets/try3/actions";

export default function Try3() {
    const[isRunning, setIsRunning]= useState(true);

    function upDateRunning(value) {
        setIsRunning(value)
    };
    return(
        <div id="main-container">
            <div id="count-down">
                <Display isRunning={isRunning}></Display>
                <Actions isRunning={isRunning} upDateRunning={upDateRunning}></Actions>
            </div>
        </div>
    )
};