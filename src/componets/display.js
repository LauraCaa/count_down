import { useState, useEffect} from "react";

export default function Display({isRunning, upDateRunning}) {
    const[timer, setTimer]= useState(60);
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

    // useEffect(() => {
    //     console.log("me ejecuto tan pronto como inicia el efecto")
    //     return () => {
    //         console.log("me ejecuto si algo cambia para matar el proceso")
    //     }
    // },[])

    return(
        <div id="count-down-display">
            <img src="/chicken.png" alt="chicken-img"/>
            <p id="timer">{timer}</p>
            <p id="description">Chicken is growing...</p>
        </div>
    )
};