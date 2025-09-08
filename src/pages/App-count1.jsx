import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function YearCounter() {
  const [year, setYear] = useState(1636);
  const nodeRef = useRef();

  useEffect(() => {
    let currentYear = 1636;
    let timer;

    function runCounter() {
      timer = setInterval(() => {
        currentYear += 1;
        setYear(currentYear);

        // ✅ 如果是關鍵年份 → 暫停 & 顯示事件
        if (keyEvents[currentYear]) {
          setEventText(keyEvents[currentYear]);
          clearInterval(timer);
          setTimeout(runCounter, 5000); // 停 2 秒後繼續
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

  // ✅ 用 animate 製作數字平滑過渡
  useEffect(() => {
    if (nodeRef.current) {
      const controls = animate(parseInt(nodeRef.current.textContent), year, {
        duration: 0.3,
        onUpdate(value) {
          nodeRef.current.textContent = Math.floor(value);
        },
      });
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
