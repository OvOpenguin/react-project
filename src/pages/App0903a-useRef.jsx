import React, { useRef, useState } from 'react'

const App = () => {
    // useState 變數 
    // const [inputValue, setInputValue] = useState("");

    // useRef 變數給input(相當於document.querySelector)
    const inputRef = useRef(null);


    console.log('App渲染了');

    function btnHandler() {
        // console.log(inputValue)

        // 查看Ref物件
        console.log(inputRef)
        // 查看Ref值
        console.log(inputRef.current.value)
        // 查看Ref型別
        console.log(inputRef.current.type)
        // 更改類型
        inputRef.current.type = "password";
    }


    return (
        <div className="wrap">
            <h1>useRef</h1><hr />
            {/* 使用useState */}
            {/* <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} /> */}


            {/* 使用useRef */}
            <input type="text" ref={inputRef} />
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default App