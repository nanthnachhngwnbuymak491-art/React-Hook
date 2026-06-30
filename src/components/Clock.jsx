import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Time Now</h2>
            <p>{time}</p>
        </div>
    )
}

export default Clock