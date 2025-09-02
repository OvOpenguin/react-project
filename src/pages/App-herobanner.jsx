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

        if (currentYear >= 2025) clearInterval(timer);
      }, 20);
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
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div ref={nodeRef} className="text-7xl font-bold">
        {year}
      </div>
    </div>
  );
}
