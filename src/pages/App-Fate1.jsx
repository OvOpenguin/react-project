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
    const [currentTopic, setCurrentTopic] = useState(topics[0]); // 初始狀態設為 null
    const [isSelecting, setIsSelecting] = useState(false);
    const intervalRef = useRef(null);

    const handleStartSelect = () => {
        if (isSelecting) return;
        setIsSelecting(true);

        // 選題開始時，先清空 currentTopic，避免顯示上一個結果
        setCurrentTopic(null);

        let count = 0;
        const maxSwitch = 15; // 模擬隨機切換次數

        intervalRef.current = setInterval(() => {
            // 在最終結果出來前，快速切換圖像
            const randomIndex = Math.floor(Math.random() * topics.length);
            setCurrentTopic(topics[randomIndex]);

            count++;

            // 檢查是否達到切換次數
            if (count >= maxSwitch) {
                clearInterval(intervalRef.current);
                setIsSelecting(false);
            }
        }, 100); // 每100毫秒切換一次
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{isSelecting ? '正在選題中...' : (currentTopic?.title || '準備選題')}</h1>

            {/* 圖像顯示區，isSelecting 或 currentTopic 存在時才顯示 */}
            {(currentTopic || isSelecting) && (
                <div
                    style={{
                        border: '2px solid #ccc',
                        padding: '10px',
                        display: 'inline-block',
                        width: '600px', // 設定固定寬度
                        height: '400px', // 設定固定高度
                    }}>
                    <img
                        src={currentTopic ? currentTopic.image : '圖片載入中...'} // 可在此加入載入圖片
                        alt={currentTopic ? currentTopic.title : '選題中'}
                        style={{ maxWidth: '100%', maxHeight: '400px' }}
                    />
                </div>
            )}

            <br />

            {/* 點我前往詳情頁的按鈕，只有在選題結束後才顯示 */}
            {currentTopic && !isSelecting && (
                <Link to={`/topic/${currentTopic.id}`}>
                    <button style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
                        點我前往詳情頁面
                    </button>
                </Link>
            )}

            <br />

            {/* 開始選題按鈕，根據 isSelecting 狀態啟用或禁用 */}
            <button onClick={handleStartSelect} disabled={isSelecting} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                {isSelecting ? '選題中...' : '開始選題'}
            </button>

        </div>
    );
}

export default RandomTopicSelector;