import React, { useEffect, useState } from 'react';

export default function Task7() {
    const [inp, setInp] = useState('');
    const [originalInp, setOriginalInp] = useState(inp);
    const [inp2, setInp2] = useState('');
    const [val, setVal] = useState(false);

    useEffect(() => {
        if (val && inp > 0) {
            const interval = setInterval(() => {
                setInp(prev => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [val, inp]);

    useEffect(() => {
        if (inp === 0) {
            setInp2('Happy Coding');
        }
    }, [inp]);

    const handleReset = () => {
        setInp(originalInp);
        setInp2('')
    };

    return (
        <div>
            <h1>CountDown Time: {inp} seconds</h1>
            <h1>{inp2}</h1>
            
            <input
                type='number'
                value={originalInp}
                onChange={(e) => {
                    setInp(parseInt(e.target.value));
                    setOriginalInp(parseInt(e.target.value));
                }}
                disabled={val}
            />
            {val ? (
                <button onClick={() => setVal(false)}>Stop</button>
            ) : (
                <button onClick={() => setVal(true)}>Start</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
