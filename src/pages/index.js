import "@/assets/styles.css";
import Display from "@/componets/display";
import Actions from "@/componets/actions";
import { useState} from "react";

export default function Home() {
  const[isRunning, setIsRunning] = useState(true);

  function upDateRunning(value) {
    setIsRunning(value)
  };
  return (
    <div id="count-down-container">
      <Display isRunning={isRunning} upDateRunning={upDateRunning}></Display>
      <Actions isRunning={isRunning} upDateRunning={upDateRunning}></Actions>
    </div>
  )
};
