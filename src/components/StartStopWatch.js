import React, { useEffect, useState } from 'react';

export default function StartStopWatch() {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState();
    const [current, setCurrent] = useState(true)
    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);

    const btnChange=()=>{
        setCurrent(!current)
        if(current){
            const interval = setInterval(() => {
                setCount(prev => prev + 1);
            }, 500);
            setIntervalId(interval);
        } else {
            clearInterval(intervalId);
        }
    }

    const resetTimer = () => {
        setCount(0);
    }

    return (
        <div>
            <h1>Timer: {count} seconds<br /></h1>
            <button onClick={btnChange}>
                {
                    current ? <>Start</> : <>Stop</>   
                }
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}
