import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

export default function YearCounter() {
  const [year, setYear] = useState(1636);
  const [eventText, setEventText] = useState("");
  const nodeRef = useRef(null);

  // 關鍵年份 & 對應事件
  const keyEvents = {
    1636: "荷蘭鬱金香泡沫",
    1929: "美國大蕭條",
    2001: "網路泡沫破裂",
    2008: "金融海嘯",
    2020: "COVID-19 金融動盪",
  };

  const startYear = 1600;
  const endYear = 2025;

  useEffect(() => {
    let currentYear = startYear;
    let timer;

    function runCounter() {
      timer = setInterval(() => {
        currentYear += 1;
        setYear(currentYear);

        // ✅ 如果是關鍵年份 → 暫停 & 顯示事件
        if (keyEvents[currentYear]) {
          setEventText(keyEvents[currentYear]);
          clearInterval(timer);
          setTimeout(runCounter, 2000); // 停 2 秒後繼續
        } else {
          setEventText("");
        }

        if (currentYear >= endYear) {
          clearInterval(timer);
        }
      }, 10); // 控制速度
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
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
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
          className="mt-6 text-2xl text-gray-300"
        >
          {eventText}
        </motion.div>
      )}
    </div>
  );
}
