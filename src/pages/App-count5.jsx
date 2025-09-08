import { useEffect, useState } from "react";
import "../css/count.css";


// 關鍵年份 & 圖片
const milestones = [
  { year: 1636, event: "鬱金香泡沫", image: "./images/p7.jpg" },
  { year: 1640, event: "美國大蕭條", image: "./images/p2.jpg" },
  { year: 1650, event: "網路泡沫", image: "./images/p3.jpg" },
  { year: 1700, event: "金融海嘯", image: "./images/p5.jpg" },
  { year: 1800, event: "疫情衝擊", image: "./images/p4.jpg" }
];

const YearCounter = () => {
  const [year, setYear] = useState(1600);        // 初始年份 1600
  const [event, setEvent] = useState("");        // 事件文字
  const [bgImage, setBgImage] = useState(null);  // 背景圖

  useEffect(() => {
    let currentYear = 1600;
    let milestoneIndex = 0;
    let interval = null;

    // 🕑 開場延遲 2 秒
    const startTimer = setTimeout(() => {
      const run = () => {
        interval = setInterval(() => {
          currentYear++;
          setYear(currentYear);

          // 🎯 遇到 milestone → 換背景 + 顯示事件 + 暫停 1.5 秒
          if (
            milestoneIndex < milestones.length &&
            currentYear === milestones[milestones.length > milestoneIndex ? milestoneIndex : 0].year
          ) {
            setEvent(milestones[milestoneIndex].event);
            setBgImage(milestones[milestoneIndex].image);
            milestoneIndex++;

            clearInterval(interval); // 暫停滾動

            // 暫停3秒後繼續跑
            setTimeout(() => {
              run();
            }, 2000);
          }

          // 跑到最後一個 milestone 就停下來
          if (currentYear >= milestones[milestones.length - 1].year) {
            clearInterval(interval);
          }
        }, 30); // 控制滾動速度
      };
      run();
    }, 500);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="section1"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined
      }}
    >
      <div className="year-counter">
        <h1>{year}</h1>
        {event && <p>{event}</p>}
      </div>
    </section>
  );
};

export default YearCounter;