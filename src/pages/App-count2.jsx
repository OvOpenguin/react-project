import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

export default function YearCounter() {
  const [year, setYear] = useState(1636);
  const [eventText, setEventText] = useState("");
  const [bgImage, setBgImage] = useState(""); // ✅ 背景圖片狀態
  const nodeRef = useRef(null);

  // 關鍵年份 & 對應事件 + 背景
  const keyEvents = {
    1636: {
      text: "荷蘭鬱金香泡沫",
      bg: "/images/tulip.jpg", // 🔗 這裡放背景圖片路徑
    },
    1929: {
      text: "美國大蕭條",
      bg: "/images/great-depression.jpg", // 🔗 放圖片
    },
    2001: {
      text: "網路泡沫破裂",
      bg: "/images/dotcom.jpg",
    },
    2008: {
      text: "金融海嘯",
      bg: "/images/lehman.jpg",
    },
    2020: {
      text: "COVID-19 金融動盪",
      bg: "/images/covid.jpg",
    },
  };

  const startYear = 1636;
  const endYear = 2025;

  useEffect(() => {
    let currentYear = startYear;
    let timer;

    function runCounter() {
      timer = setInterval(() => {
        currentYear += 1;
        setYear(currentYear);

        // ✅ 如果是關鍵年份 → 暫停 & 顯示事件 + 換背景
        if (keyEvents[currentYear]) {
          setEventText(keyEvents[currentYear].text);
          setBgImage(keyEvents[currentYear].bg);
          clearInterval(timer);
          setTimeout(runCounter, 2000); // 停 2 秒後繼續
        } else {
          setEventText("");
        }

        if (currentYear >= endYear) {
          clearInterval(timer);
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
      className="h-screen flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none", // ✅ 這裡套背景
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // 平滑切換背景
      }}
    >
      {/* 半透明遮罩，避免背景太亮影響文字 */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 內容 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 年份 */}
        <div ref={nodeRef} className="text-7xl font-bold">
          {startYear}
        </div>

        {/* 事件文字 */}
        {eventText && (
          <motion.div
            key={eventText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-2xl text-gray-200"
          >
            {eventText}
          </motion.div>
        )}
      </div>
    </div>
  );
}
