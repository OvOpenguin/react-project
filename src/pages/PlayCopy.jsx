
import "../sass/play.scss"
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// 圖片匯入
import 開始遊戲 from "../images/play/play-start.svg"
import 結束遊戲 from "../images/play/play-end.svg"
import 蝴蝶 from "../images/play/butterfly-og.png"
import 黑影花 from "../images/play/play-flowerBlack-1.png"
import 真實花 from "../images/play/play-flowerReal-1.png"

// 呼叫useState
import React, { useState } from "react";


// 建立題庫陣列物件資料
const questions = [
    {
        id: 1,
        silhouette: "./play/play-flowerBlack-1.png",
        image: "./play/play-flowerReal-1.png",
        options: ["玫瑰", "百合", "牡丹"],
        answer: "玫瑰",
    },
    {
        id: 2,
        silhouette: "./play/play-flowerBlack-1.png",
        image: "./play/play-flowerReal-1.png",
        options: ["鬱金香", "向日葵", "菊花"],
        answer: "向日葵",
    },
];

// 隨機抽題亂數
const getRandomQuestion = () => {
    const index = Math.floor(Math.random() * questions.length);
    return index;
};



const Play = () => {

    const [gameStarted, setGameStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(getRandomQuestion());
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    return (
        <>
            <div className='playWrap'>

                {/* 說明遊戲 */}
                <div className="playExplain">

                    {/* 裝飾 */}
                    <div className="pButterfly"><img src={蝴蝶} alt="蝴蝶" /></div>
                    <div><h2>看花影 猜花卉</h2></div>
                    <div><h3>Hide & seek</h3></div>
                    <p>花的姿態千變萬化，有些光靠剪影也能辨認。
                        <br />透過這個互動遊戲，挑戰你的植物觀察力！
                        <br />仔細看花瓣形狀、葉序特徵，
                        <br />你是否能從黑影中，一眼認出這朵花的名字？</p>

                    {/* 下方開始/結束按鍵 */}
                    <div className='playBtn'>
                        <div className="start-btn" onClick={() => {
                            setGameStarted(true);
                            setCurrentQ(getRandomQuestion());
                            setShowAnswer(false);
                            setWrongAnswers([]);
                        }}><img src={開始遊戲} alt="開始遊戲" /></div>





                        <div className="end-btn" onClick={() => {
                            setShowAnswer(true)
                        }}><img src={結束遊戲} alt="結束遊戲" /></div>

                    </div>
                </div>



                
                
                
                {/* 遊戲圖片+選項 */}
                <div className='questions'>
                    {/* 剪影圖片載入 */}
                    <div className="image-area">
                        {!showAnswer ? (
                            <img src={questions[currentQ].silhouette} alt="剪影" />
                        ) : (
                            <img src={questions[currentQ].image} alt="真實花" />
                        )}
                    </div>

                    {/* 原本選項項目 */}
                    {/* <div className='a1'>玫瑰</div>
                        <div className='a2'>雛菊</div>
                        <div className='a3'>百合</div> */}

                    {/* 選項區 */}
                    <div className="answer">
                        {!showAnswer &&
                            questions[currentQ].options.map((opt, i) => (
                                <div
                                    key={i}
                                    className={`option ${wrongAnswers.includes(opt) ? "crayon" : ""}`}
                                    onClick={() => {
                                        if (opt === questions[currentQ].answer) {
                                            setShowAnswer(true);
                                        } else {
                                            setWrongAnswers([...wrongAnswers, opt]);
                                        }
                                    }}
                                >
                                    {opt}
                                </div>
                            ))}

                        {/* 下一題按鈕 */}
                        {showAnswer && (<div className="next" onClick={() => {
                            setCurrentQ(getRandomQuestion());
                            setShowAnswer(false);
                            setWrongAnswers([]);
                        }}>下一題</div>)}
                    </div>
                </div>


            </div >
        </>

    )
}

export default Play