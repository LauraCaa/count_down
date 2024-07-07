import { useState, useEffect } from "react";

export default function Display({isRunning}) {
    const[timer, setTimer]= useState(60);
    const[isDone, setIsDone]= useState(false);

    useEffect(() => {
        if(timer > 0 && isRunning){
            let intervalId = setInterval(() => {
                setTimer((currentTimer) => currentTimer -1)
            }, 1000)
            return () => {
                clearInterval(intervalId)
            }
        }
    }, [isDone, isRunning]);
    useEffect(() => {
        if(timer === 0){
            setIsDone(true)
        }
    }, [timer]);

    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    const upDatedTimer = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return(
        <div id="count-down-display">
            <img src="/chicken.png" alt="chicken-img"/>
            <p id="timer">{upDatedTimer}</p>
            <p id="description">Chicken is growing...</p>
        </div>
    )
};