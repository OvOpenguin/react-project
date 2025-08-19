

// 建立子元件 
// 子元件return不需要小括號
// 直接使用props元件
function MyConponent1(props) {
    console.log(props); //檢查用
    props.c(); //要加小括號()代表執行
    return <>
        <div>我是標準寫法</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
        {/* return內的js語法要加大括號{} */}
    </>
}

// 物件解構=>｛物件成員｝
function MyConponent2({ a, b, c }) {
    // console.log(props); //檢查用
    c();
    return <>
        {/* 這裡空標籤不能在下一行，得跟在return後面 */}
        <div>我是簡化寫法</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 物件解構=>｛物件成員｝
function MyConponent3({ a, b = "我是預設值", c }) {
    // c();
    return <>
        <div>屬性預設值</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}


// 父元件 !!! props能傳送「屬性/方法」給子元件
const App0819 = () => {
    return (<>
        <MyConponent1 a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
        <MyConponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
        <MyConponent3 a="我是屬性a" b="我是vivi" c={() => { console.log("789") }} />
    </>

    )
}
export default App0819