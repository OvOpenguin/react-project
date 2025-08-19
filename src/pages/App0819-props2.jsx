
//次元件
function Second({ c }) {
    // console.log(props);
    return <>
        <h1>我是次元件</h1>
        <p>次元件接收的屬性是：{c}</p>
    </>

}

// 子元件：要接收主元件的傳遞 (這裡會用到children)
function MyConponent({ a, children }) {
    // console.log(porps)
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et qui neque aspernatur perferendis commodi totam earum, optio ut eveniet.</p>
            {children}
            我是：{a}
        </>
    )
}

// 直接在子元件呼叫次元件
function MyConponent2({ b }) {
    // console.log(porps)
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia et qui neque aspernatur perferendis commodi totam earum, optio ut eveniet.</p>

            {/* 呼叫次元件 */}
            <Second c={b}></Second>
            我是：{b}
        </>
    )
}

// 父元件
const App0819b = () => {
    return (
        <div>
            <h1>元件之間，傳遞物件！</h1><hr />

            {/* 此方法較進階 */}
            <MyConponent a="屬性a">
                <Second c="屬性a" />
            </MyConponent>

            <hr />

            {/* 現階段使用此方法：逐層各自呼叫 */}
            <MyConponent2 b="屬性b" />
        </div>
    )
}

export default App0819b