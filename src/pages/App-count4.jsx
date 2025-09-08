import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";



// count 4 加入圖片 下方文字沒有沿用
export default function YearCounter() {
    const [year, setYear] = useState(1636);
    const [eventText, setEventText] = useState("");
    const [bgImage, setBgImage] = useState("../images/p9.jpg"); // ✅ 背景圖片狀態
    const nodeRef = useRef(null);

    // 關鍵年份 & 對應事件 + 背景
    const keyEvents = {
        1636: {
            text: "荷蘭鬱金香泡沫",
            bg: "../images/p1.jpg", // 🔗 這裡放背景圖片路徑
        },
        1700: {
            text: "美國大蕭條",
            bg: "../images/p2.jpg", // 🔗 放圖片
        },
        1750: {
            text: "網路泡沫破裂",
            bg: "./images/p6.jpg",
        },
        1800: {
            text: "金融海嘯",
            bg: "./images/p4.jpg",
        },
        1900: {
            text: "COVID-19 金融動盪",
            bg: "./images/p5.jpg",
        }
    };

    const startYear = 1600;
    const endYear = 2025;

    useEffect(() => {
        let currentYear = startYear;
        let timer;

        function runCounter() {
            timer = setInterval(() => {
                if (currentYear >= endYear) {
                    clearInterval(timer);
                    return; // 結束本次函式執行
                }
                currentYear += 1;
                setYear(currentYear);

                // ✅ 如果是關鍵年份 → 暫停 & 顯示事件 + 換背景
                if (keyEvents[currentYear]) {
                    setEventText(keyEvents[currentYear].text);
                    setBgImage(keyEvents[currentYear].bg);
                    clearInterval(timer);
                    setTimeout(runCounter, 2000); // 停 2 秒後繼續
                }
            }, 50); // 控制速度
        }

        runCounter();
        return () => clearInterval(timer);
    }, []);

    // ✅ 用 animate() 讓數字平滑滾動
    useEffect(() => {
        if (nodeRef.current) {
            const controls = animate(
                parseInt(nodeRef.current.textContent || startYear),
                year,
                {
                    duration: 0.3,
                    onUpdate(value) {
                        nodeRef.current.textContent = Math.floor(value);
                    },
                }
            );
            return () => controls.stop();
        }
    }, [year]);

    return (
        <div
            style={{
                fontSize: "8rem",
                color: "#fff",
                height: "100vh",
                backgroundImage: bgImage ? `url(${bgImage})` : "none", // ✅ 這裡套背景
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out", // 平滑切換背景
            }}
        >

            {/* 內容 */}
            <div>
                {/* 年份 */}
                <div ref={nodeRef}>
                    {startYear}
                </div>

                {/* 事件文字 */}
                {eventText && (
                    <div>
                        {eventText}
                    </div>
                )}
            </div>
        </div>
    );
}
