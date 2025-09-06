import { useEffect, useState } from "react";
import "../css/count6.css";

const milestones = [
  { year: 1636, event: "鬱金香泡沫", image: "/images/p7.jpg" },
  { year: 1640, event: "美國大蕭條", image: "/images/p2.jpg" },
  { year: 1700, event: "網路泡沫", image: "/images/p3.jpg" },
  { year: 1750, event: "金融海嘯", image: "/images/p5.jpg" },
  { year: 1800, event: "疫情衝擊", image: "/images/p4.jpg" },
];

const YearCounter = () => {
  const [year, setYear] = useState(1600);
  const [event, setEvent] = useState("");
  const [bgImage, setBgImage] = useState("/images/p10.jpg"); // ✅ 一開始就是預設背景
  const [fadeImage, setFadeImage] = useState(null); // 新圖片做淡入

  useEffect(() => {
    let currentYear = 1600;
    let milestoneIndex = 0;
    let interval = null;

    const startTimer = setTimeout(() => {
      const run = () => {
        interval = setInterval(() => {
          currentYear++;
          setYear(currentYear);

          if (
            milestoneIndex < milestones.length &&
            currentYear === milestones[milestoneIndex].year
          ) {
            setEvent(milestones[milestoneIndex].event);

            // ✅ 切換時，先放到 fadeImage，淡入完成後再設為 bgImage
            const newImage = milestones[milestoneIndex].image;
            setFadeImage(newImage);

            // 等待淡入 1s，然後正式替換
            setTimeout(() => {
              setBgImage(newImage);
              setFadeImage(null);
            }, 1000);

            milestoneIndex++;
            clearInterval(interval);

            // 停 1.5 秒再繼續
            setTimeout(() => {
              run();
            }, 1500);
          }

          if (currentYear >= milestones[milestones.length - 1].year) {
            clearInterval(interval);
          }
        }, 30);
      };

      run();
    }, 2000);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section className="section1">
      {/* 固定背景（目前的主背景圖） */}
      <div
        className="bg-layer"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* 淡入的新背景 */}
      {fadeImage && (
        <div
          className="bg-layer fade-in"
          style={{ backgroundImage: `url(${fadeImage})` }}
        />
      )}

      <div className="year-counter">
        <h1>{year}</h1>
        {event && <p>{event}</p>}
      </div>
    </section>
  );
};

export default YearCounter;
