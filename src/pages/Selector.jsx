import React, { useState } from 'react'

const Selector = () => {

    //宣告useState
    const [select, setSelect] = useState('');
    // 建立下拉清單項目
    const opList = ["HTML", "CSS", "JavaScript", "React"]
    // 建立下拉清單內容
    const opListValue = ['html', 'css', 'js', 'react']

    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2>
            <p>目前被選取的項目：{select}</p>
            <select
                name=""
                id="select"
                value={select}
                onChange={(e) => {
                    // 呼叫useState
                    setSelect(e.target.value);
                    console.log(e.target.value);
                }}>
                {/* disabled =>失效 */}
                <option value="" disabled>請選擇</option>

                {/* 使用陣列map方法 記得加key */}
                {
                    //js語法包在大括號{}
                    opList.map((item, index) => {
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/*  
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option>
                //*/}
            </select>



        </div>
    )
}

export default Selector