import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);

      console.log("time updated to", newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="center">
        <h1>{time}</h1>
      </section>
    </>
  );
}

export default Timer;
