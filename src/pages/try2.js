import "@/assets/try2.css";
import { useState } from "react";
import Display from "@/componets/try2/display";
import Actions from "@/componets/try2/actions";

export default function Try2() {
    const[isRunning, setIsRunning]= useState(true);

    function upDateRunning(value) {
        setIsRunning(value)
    };
    return(
        <div id="main-container">
            <div id="count-down-container">
                <Display isRunning={isRunning}></Display>
                <Actions isRunning={isRunning} upDateRunning={upDateRunning}></Actions>
            </div>
        </div>
    )
};