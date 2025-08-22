import React, { useState } from 'react'

const Input = () => {

    // let txt = "user";
    const [txt, setTxt] = useState('user');

    return (
        <div>
            <h2>文字方塊</h2>
            帳號：<input type="text" value={txt} onChange={(e) => {
                //順序：呼叫useState => 通過setTxt更改txt內容變為 e.target.value => 回傳給input的 value 來呈現
                setTxt(e.target.value);
                // console.log(e.target.value);
            }} />
            <button id='btn' onClick={()=>{
                alert(`帳號:${txt}`);
            }}>確定送出</button>
        </div>
    )
}

export default Input