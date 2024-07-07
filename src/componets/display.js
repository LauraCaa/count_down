import { useState, useEffect} from "react";

export default function Display({isRunning, upDateRunning}) {
    const[timer, setTimer]= useState(3600);
    const[isDone, setIsDone] = useState(false);

    useEffect(() => {
        if(timer > 0 && isRunning){
            const intervalId = setInterval(() => {
                setTimer((currentTimer) => currentTimer - 1)
            }, 1000)
            return () => {
                clearInterval(intervalId)
            }
        }
    }, [isDone, isRunning])

    useEffect(() => {
        if(timer === 0){
            setIsDone(true);
            upDateRunning(false);
        }
    },[timer])
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return(
        <div id="count-down-display">
            <img src="/chicken.png" alt="chicken-img"/>
            <p id="timer">{formattedTime}</p>
            <p id="description">Chicken is growing...</p>
        </div>
    )
};