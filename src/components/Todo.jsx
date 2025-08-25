import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";


// todo是從TodoWrapper而來，需用大括號{}來解構該物件{todo}
const Todo = ({ todo, delTodo, toggleCompleted, toggleIsEdit }) => {
    return (
        todo.isEdit ? <EditForm todo={todo} />
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* return內不能用if判斷式 */}
                {/* 故使用「三元運算值」套用css規則  */}
                {/* 對項目點擊，會出現刪除線 */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>

                <div>
                    <MdEdit
                        style={{ cursor: "pointer", marginRight: "8px" }}
                        // 按下edit => 先顯示可編輯狀態 =>可更改todo項目的content => 通過toggleIsEdit函式回傳至TodoWrapper
                        onClick={()=>{toggleIsEdit(todo.id)}}
                    />

                    <MdDelete
                        style={{ cursor: "pointer" }}
                        // 按下delet => 回傳該todo項目的id => 通過delTodo的函式回傳至TodoWrapper
                        onClick={() => { delTodo(todo.id) }}
                    />
                </div>

            </div>
    )
}

export default Todo