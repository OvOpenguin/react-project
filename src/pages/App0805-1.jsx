import'../css/App0805-1.css'

function App() {
    // 一般變數
    const dogName="阿花" 
    // 屬性名稱變數：假設屬性內容會變，可宣告為一個變數，以利更改。
    const myClassName="myClass"
    // 方法
    function myClick(){
        alert('我是按鈕1')
    }


    return (
        <>
            <div>
                <p style={{fontWeight:'900', fontSize:'24px'}} className={myClassName}>姓名：{dogName}</p>
            
                <button type="button" onClick={myClick}>按鈕1</button>
                <button type="button" onClick={()=>{
                    alert('我是按鈕2')
                }}>按鈕2</button>
            </div>
        </>
    )
}
export default App; //要匯出