import "@/assets/try4.css"
import {useState} from "react";
import Display from "@/componets/try4/display";
import Actions from "@/componets/try4/actions";

export default function Tr4() {
    const[isRunning,setIsRunning] = useState(true);
    function upDateActions(value) {
        setIsRunning(value)
    };
    return(
        <div id="count-down">
            <Display isRunning= {isRunning}></Display>
            <Actions isRunning= {isRunning} upDateActions={upDateActions}></Actions>
        </div>

    )
};