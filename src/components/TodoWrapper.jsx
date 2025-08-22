import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'

const TodoWrapper = () => {
    // 因為有n個todo，所以要用陣列存放。
    // const [todos, setTodos] = useState(["繳停車費", "對發票"]);

    // 如果陣列內容有增減時，索引值會異動。
    // 為避免修改資料時，造成索引值錯亂，將陣列改為[陣列物件]。
    // key值用亂數來產生 
    const [todos, setTodos] = useState([
        { content: "繳停車費", id: Math.random(), isCompleted: false },
        { content: "對發票", id: Math.random(), isCompleted: false },
    ]);

    // 建立刪除todo
    // 傳入被刪除的todo.id
    // 從 Todo.jsx 得到回傳的todo.id => 利用filter去篩選所有陣列資料的id => 若id和回傳的todo.id不同則保留
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留沒被刪除的id  (不等於 id 的會被return)
            return todo.id !== id

        }))
    }

    // 建立切換isCompleted屬性函式
    const toggleCompleted = (id) => {
        // 檢查被點擊的項目的id是否跟陣列中的id一樣
        // yes => 1. 取出todo 2.將isCompleted屬性值反向(!NOT)
        // no => todo不變
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }


    return (
        <div className='wrapper'>
            <h1>代辦事項</h1>


            {/* 傳遞方法：方法2 */}
            <CreateForm addTodo={(newContent) => {
                // 這裡傳送的為「方法=箭頭函式」並解構： method = {()=>{}}
                // 建立新的todo內容
                // 1. 使用...todos 其餘運算子來保留原陣列
                // 2. 再加上新的物件內容
                setTodos([...todos, { content: newContent, id: Math.random(), isCompleted: false }])
            }} />

            {
                // todos是陣列資料，todo是使用.map時的參數，todo = todos[0], todos[1]...
                todos.map((todo) => {
                    //通過增加物件屬性todoname將「父元件的陣列物件資料」傳遞到「子元件 Todo.jsx」
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                })
            }

        </div>
    )
}

export default TodoWrapper