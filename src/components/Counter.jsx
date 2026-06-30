import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h2>Counter     Number</h2>
                <p>Amount Now: {count}</p>
                <button onClick={() => setCount(count + 1)}>Add</button>
            </div>
            <button onClick={() => setCount(count - 1)}>Minus</button>
        </>
    )
}

export default Counter