import React, { useState } from 'react'



// 建立元件 方法1
function MyComponent() {
    // 宣告通常在return前
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    // return 內放要呈現的「結構」和「宣告的函式」，且該函式不需加小括號()
    return (
        <button id='btn1' onClick={handleClick}> 點擊按鈕: {count}</button >
    )
}

// 建立元件 方法2
// const MyComponent=()=>{
//     return(

//     )
// } 


const Usestate = () => {
    // let count = 0;
    // 常數: 故用 coust 宣告
    // const [count, setCount] = useState(0);

    return (
        <div>
            <MyComponent></MyComponent>

            {/* 一般實際呈現return的頁面會乾淨簡潔，使用呼叫元件來呈現 */}
            {/* <button id='btn1' onClick={() => {
                // count++;  //count = count + 1
                // setCount(count + 1);  //要透過 setCount 來更改常數 count
                // console.log(count);
            }}>點擊按鈕:{count}</button> */}
        </div>
    )
}

export default Usestate