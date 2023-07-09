import React, { useEffect, useState } from 'react'
import './CustomeInput.scss'
const CustomeInput = ({data,type, placeholder,changeInput}) => {
    const [input, setInput] = useState('');
    const handleInput = (event) => {
        setInput(event.target.value);
        
    }
    useEffect(() => {
        changeInput(input);
    },[input])
    return (
        <div className='input-config'>
            <label>{data}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={input}
                onChange={handleInput}
            />
        </div>
    )
}

export default CustomeInput
