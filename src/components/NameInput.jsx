import React, { useState } from 'react'

const NameInput = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <h2>Input Name</h2>
            <input 
                type="text" 
                placeholder='Please Input Your Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <p>Your Input : {name}</p>
        </div>
    )
}

export default NameInput