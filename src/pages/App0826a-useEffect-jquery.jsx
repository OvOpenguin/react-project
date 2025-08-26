import $ from 'jquery'
import { useEffect } from 'react'
import "../css/app0826a.css"

const App = () => {

    // 使用監聽事件時，要放在useEffect
    // 為了讓結構先宣染，所以效果寫在useEffect裡。
    // [] => 用於存放事件，不會一直被呼叫
    useEffect(() => {

        // 當滑鼠移到圖片上時，圖片會放大。
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })

        // 當滑鼠離開，圖片還原。
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])



    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery 圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="./images/p8.jpg" alt="" />
            </a>
        </div>
    )
}

export default App