import "@/assets/try1.css";
import Display from "@/componets/try1/display";
import Actions from "@/componets/try1/actions";
import { useState } from "react";

export default function Try1() {
    const[isRunning, setIsRunning]= useState(true);
    function handleRunning(value) {
        setIsRunning(value)
    };
    return(
        <div id="main-container">
            <div id="count-down-container">
                <Display isRunning ={isRunning}></Display>
                <Actions isRunning ={isRunning} handleRunning={handleRunning}></Actions>
            </div>
        </div>
    )
};