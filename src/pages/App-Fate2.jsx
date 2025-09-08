import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { scenarios } from '../json/ScenarioData'; // 假設你把章節資料抽成獨立檔案

function RandomTopicSelector() {
    // 將初始狀態設為 null
    const [currentScenario, setCurrentScenario] = useState(null);
    const [isSelecting, setIsSelecting] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        // 遍歷所有圖片的 URL
        scenarios.forEach(topic => {
            const img = new Image();
            img.src = topic.image;
        });
    }, []); // 傳入空陣列，確保這段程式碼只在元件初次渲染時執行一次



    const handleStartSelect = () => {
        if (isSelecting) return;
        setIsSelecting(true);

        let count = 0;
        const maxSwitch = 15;

        const switchInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * scenarios.length);
            setCurrentScenario(scenarios[randomIndex]);
            count++;

            if (count >= maxSwitch) {
                clearInterval(switchInterval);
                setIsSelecting(false);
            }
        }, 100);

        intervalRef.current = switchInterval;
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{isSelecting ? '正在選題中...' : '隨機選題'}</h1>

            <div
                style={{
                    border: '2px solid #ccc',
                    padding: '10px',
                    display: 'inline-block',
                    width: '600px',
                    height: '400px',
                    overflow: 'hidden',
                    // 在選題開始前，背景為黑色
                    backgroundColor: currentScenario ? 'transparent' : 'black',
                }}
            >
                {/* 只有在有圖片資料時才渲染 img 標籤 */}
                {currentScenario && (
                    <img
                        src={currentScenario.image}
                        alt={currentScenario.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                )}
            </div>

            <br />

            {currentScenario && !isSelecting && (
                <>
                    <h3>{currentScenario.name}</h3>
                    <Link to={`/topic/${currentScenario.id}`}>
                        <button style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
                            點我前往詳情頁面
                        </button>
                    </Link>
                </>
            )}

            <br />

            <button
                onClick={handleStartSelect}
                disabled={isSelecting}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
            >
                {isSelecting ? '選題中...' : '開始選題'}
            </button>
        </div>
    );
}

export default RandomTopicSelector;