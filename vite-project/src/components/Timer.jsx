import React, { useState, useEffect } from "react";

export default function App() {    
    
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            // 현재 시간을 가져온다
            const today = new Date();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();

            let leftHours = 23 - hours;
            let leftMinutes = 59 - minutes;
            let leftSeconds = 60 - seconds;

            if(seconds===0){
                console.log("아...내..1분");
            }

            setHours(leftHours);
            setMinutes(leftMinutes);
            setSeconds(leftSeconds);
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    return (
        <>
            <h1>오늘이</h1>
            <h2 style={{ color: "red" }}>{hours}:{minutes}:{seconds}</h2>
            <h1>밖에 안남았다니...</h1>
        </>
    );
}
