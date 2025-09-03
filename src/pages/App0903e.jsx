import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [inputValue, setInputValue] = useState('');

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1
        // console.log(count.current);
    })


    return (
        <div>
            <h1>useRef-次數異動</h1><hr />

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>文字方塊異動次數：{count.current}</h2>

        </div>
    )
}

export default App