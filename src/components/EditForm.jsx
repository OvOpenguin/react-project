import React, { useState } from 'react'



// 方法2：
const EditForm = ({ todo, editTodo }) => {

  const [editContent, seteditContent] = useState(todo.content);

  // 建立一個函式處理新增的todo資料
  function editData() {
    editTodo(todo.id, content)
  }

  return (
    <form className='create-form'>
      <input
        id='myInput'
        type="text"
        placeholder='輸入代辦事項'
        value={editContent}
        // 去除資料"前後"的空白 => trim()
        onChange={(e) => {
          seteditContent(e.target.value.trim())
        }}
      />

      {/* 按下會將填寫內容回傳至父元件 */}
      <button type='button' onClick={editData}>完成</button>
    </form>
  )
}

export default EditForm