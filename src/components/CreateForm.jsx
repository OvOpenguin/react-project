import React, { useState } from 'react'



// 方法2：
const CreateForm = ({ addTodo }) => {

  const [txt, setTxt] = useState('');

  // 建立一個函式處理新增的todo資料
  function addData() {
    let myInput = document.getElementById('myInput');
    myInput.focus(); //指定游標 

    if (txt.length === 0) {
      alert("沒有輸入待辦內容");
    } else {
      addTodo(txt);
      setTxt("");
    }

  }

  return (
    <form className='create-form'>
      <input
        id='myInput'
        type="text"
        placeholder='輸入代辦事項'
        value={txt}
        // 去除資料"前後"的空白 => trim()
        onChange={(e) => {setTxt(e.target.value.trim());}} />

      {/* 按下會將填寫內容回傳至父元件 */}
      <button type='button' onClick={addData}>加入</button>
    </form>
  )
}

export default CreateForm