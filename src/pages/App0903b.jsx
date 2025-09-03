import React, { useRef } from 'react'

const App = () => {
    // 建立useRef變數
    const inputRef = useRef();

    // 建立關閉密碼函式
    function closePassword() {
        // 動態改變類型
        inputRef.current.type = "password";
    }

    // 建立顯示密碼函式
    function showPassword() {
        // 動態改變類型
        inputRef.current.type = "text";
    }


    return (
        <div>
            <h1>useRef 開關密碼</h1><hr />

            <input type="text" ref={inputRef} />
            <button onClick={closePassword}>關閉密碼</button>
            <button onClick={showPassword}>查看密碼</button>
        </div>
    )
}

export default App