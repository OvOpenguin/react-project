import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// 題目與圖像的資料
const topics = [
    {
        id: "1",
        title: '臺北市立動物園',
        image: './images/p1.jpg',
    },
    {
        id: "2",
        title: '九份老街',
        image: './images/p2.jpg',
    },
    {
        id: "3",
        title: '淡水漁人碼頭',
        image: './images/p3.jpg',
    },
    {
        id: "4",
        title: '日月潭',
        image: './images/p4.jpg',
    },
];

function RandomTopicSelector() {
    const [currentTopic, setCurrentTopic] = useState(topics[0]);
    const [isSelecting, setIsSelecting] = useState(false);
    const intervalRef = useRef(null);



    const handleStartSelect = () => {
        if (isSelecting) return;
        setIsSelecting(true);

        let count = 0;
        const maxSwitch = 15; // 模擬隨機切換次數

        intervalRef.current = setInterval(() => {
            if (count >= maxSwitch) {
                clearInterval(intervalRef.current);
                // 停止隨機切換後，設定最終題目
                const randomIndex = Math.floor(Math.random() * topics.length);
                setCurrentTopic(topics[randomIndex]);
                setIsSelecting(false);
            } else {
                // 在最終結果出來前，快速切換圖像
                const randomIndex = Math.floor(Math.random() * topics.length);
                setCurrentTopic(topics[randomIndex]);
                count++;
            }
        }, 100); // 每100毫秒切換一次
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{isSelecting ? '正在選題中...' : currentTopic.title}</h1>

            {/* 原始項目 */}
            {/* <div style={{ border: '2px solid #ccc', padding: '10px', display: 'inline-block' }}>
                <img
                    src={currentTopic.image}
                    alt={currentTopic.title}
                    style={{ maxWidth: '100%', maxHeight: '400px' }}
                />
            </div> */}



            {/* 新增連結選項 */}
            {currentTopic ? (
                <>
                    <div style={{ border: '2px solid #ccc', padding: '10px', display: 'inline-block' }}>
                        <img
                            src={currentTopic.image}
                            alt={currentTopic.title}
                            style={{ maxWidth: '100%', maxHeight: '400px' }}
                        />
                    </div>

                    <h3>{currentTopic.title}</h3>
                    
                    {/* 使用 <Link> 來跳轉到新的頁面，並傳遞參數 */}
                    <Link to={`/topic/${currentTopic.id}`}>
                        <button style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
                            點我前往詳情頁面
                        </button>
                    </Link>

                </>
            ) : (
                <p>點擊按鈕開始隨機選題</p>
            )}



            <br />

            <button onClick={handleStartSelect} disabled={isSelecting} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                {isSelecting ? '選題中...' : '開始選題'}
            </button>

        </div>
    );
}

export default RandomTopicSelector;