import React, { useState } from "react";

const questions = [
    {
        id: 1,
        silhouette: "/images/rose_shadow.png",
        image: "/images/rose.png",
        options: ["玫瑰", "百合", "牡丹"],
        answer: "玫瑰",
    },
    {
        id: 2,
        silhouette: "/images/sunflower_shadow.png",
        image: "/images/sunflower.png",
        options: ["鬱金香", "向日葵", "菊花"],
        answer: "向日葵",
    },
];

export default function FlowerGame() {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [wrongAnswers, setWrongAnswers] = useState([]);

    const handleStart = () => {
        setGameStarted(true);
        setCurrentQ(0);
        setShowAnswer(false);
        setWrongAnswers([]);
    };

    const handleSelect = (opt) => {
        if (opt === questions[currentQ].answer) {
            setShowAnswer(true);
        } else {
            setWrongAnswers([...wrongAnswers, opt]);
        }
    };

    const handleNext = () => {
        const nextQ = (currentQ + 1) % questions.length;
        setCurrentQ(nextQ);
        setShowAnswer(false);
        setWrongAnswers([]);
    };

    const handleEnd = () => {
        setShowAnswer(true);
    };

    const q = questions[currentQ];

    return (
        <div className="game-container">
            {!gameStarted ? (
                // 🚩 遊戲還沒開始 → 只顯示「開始按鈕」
                <button onClick={handleStart} className="start-btn">
                    開始遊戲
                </button>
            ) : (
                // 🚩 遊戲開始後 → 才顯示題目、選項、按鈕
                <>
                    {/* 圖片顯示區 */}
                    <div className="image-area">
                        {!showAnswer ? (
                            <img src={q.silhouette} alt="花剪影" />
                        ) : (
                            <img src={q.image} alt="花圖片" />
                        )}
                    </div>
                    {/* 選項區 */}
                    <div className="options-area">
                        {!showAnswer &&
                            q.options.map((opt, i) => (
                                <button
                                    key={i}
                                    className={`option ${wrongAnswers.includes(opt) ? "crayon" : ""}`}
                                    onClick={() => handleSelect(opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                    </div>
                    {/* 下一題 */}
                    {showAnswer && (
                        <button onClick={handleNext} className="next-btn">
                            下一題
                        </button>
                    )}
                    {/* 結束遊戲 */}
                    <button onClick={handleEnd} className="end-btn">
                        結束遊戲
                    </button>
                </>
            )}
        </div>
    );
}


// {!gameStarted ? (
//   <button onClick={handleStart}>開始遊戲</button>
// ) : (
//   <>
//     ... 題目和選項 ...
//   </>
// )}
// → 還沒開始時只會顯示開始按鈕，選項和題目都被藏起來。
