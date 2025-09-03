import React, { useRef } from 'react'

const App = () => {
    // useRef
    const colorRef1 = useRef(null);
    const colorRef2 = useRef(null);
    const colorRef3 = useRef(null);

    console.log(colorRef1);


    // 函式
    function showColor1() {
        colorRef1.current.style.backgroundColor = 'azure';
        colorRef2.current.style.backgroundColor = '';
        colorRef3.current.style.backgroundColor = '';
    }
    function showColor2() {
        colorRef1.current.style.backgroundColor = '';
        colorRef2.current.style.backgroundColor = 'azure';
        colorRef3.current.style.backgroundColor = '';
    }
    function showColor3() {
        colorRef1.current.style.backgroundColor = '';
        colorRef2.current.style.backgroundColor = '';
        colorRef3.current.style.backgroundColor = 'azure';
    }

    // 

    return (
        <div className='wrap'>
            文字方塊1<input type="text" ref={colorRef1} onFocus={showColor1} />
            <br />
            文字方塊2<input type="text" ref={colorRef2} onFocus={showColor2} />
            <br />
            文字方塊3<input type="text" ref={colorRef3} onFocus={showColor3} />
        </div>
    )
}

export default App