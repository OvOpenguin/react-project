import React, { useState } from 'react'

const App0819pic = () => {
    // 宣告useState
    const [curImg, setCurImg] = useState(1);
    // 建立圖片陣列
    const arrPhotos = [
        {
            imgName: "./images/p7.jpg"
        }, {
            imgName: "./images/p3.jpg"
        }, {
            imgName: "./images/p4.jpg"
        }, {
            imgName: "./images/p5.jpg"
        }
    ]
    return (
        <div>
            <h1>小圖換大圖</h1><hr />
            <div>
                {/* <img src="" alt="" width={120} height={80} style={{ cursor: "pointer" }} /> */}

                {
                    arrPhotos.map((photo, index) => {
                        return (
                            <img
                                key={index}
                                src={arrPhotos[index].imgName}
                                alt=""
                                width={120} height={80}
                                style={{ cursor: "pointer" }}
                                // 滑鼠事件：使用箭頭函式
                                // onMouseOver={() => { setCurImg(index) }}
                                // 若離開縮圖，要還原預設圖
                                // onMouseOut={() => { setCurImg(2) }} 
                                // 點選縮圖才更換
                                onClick={() => {
                                    setCurImg(index)
                                    // 動元素讓縮圖被左鍵一下，才會顯示 (display:block)
                                    let showPic = document.querySelector("#showPic")
                                    showPic.style.display = "block";
                                }}
                            />
                        )
                    })
                }
            </div>
            <div>
                {/* 顯示大圖，預設看不見，當縮圖被左鍵一下，才會顯示 */}
                <img
                    id='showPic'
                    src={arrPhotos[curImg].imgName}
                    alt=""
                    width={420} height={280}
                    style={{ display: "none" }} />
            </div>
        </div>
    )
}

export default App0819pic