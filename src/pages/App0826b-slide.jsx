import { useState } from 'react'
import { useEffect } from 'react';
import '../css/App0826b.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const App = () => {

  // 預設為第一張圖
  const [currentIndex, setCurrentIndex] = useState(0);

  // 建立圖片陣列物件資料
  const slides = [
    { url: "./images/p3.jpg", title: "photo-1" },
    { url: "./images/p5.jpg", title: "photo-2" },
    { url: "./images/p7.jpg", title: "photo-3" },
    { url: "./images/p9.jpg", title: "photo-4" },
  ]


  // 當currentImgIndex改變時，會觸發useEffect 
  // 語法：useEffect(()=>{},[]);
  useEffect(() => {
    
    // 每3秒呼叫nextSlide()換下一張圖
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);


    // 每3秒後，移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);

  }, [currentIndex]);



  // 上一張
  const prevSlide = () => {
    // 取得前一張的索引編號，檢查是否為第一個編號
    // 是=>跳到最後張
    // 否=>跳到前一張
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  // 下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一個編號
    // 是=>回到第一張
    // 否=>跳到下一張
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }



  //建立左右icon元件
  const Arrow = ({ direction, onClick }) => {
    return (
      <div style={{
        position: 'absolute',
        top: "30%",
        cursor: "pointer",
        color: "#333",
        [direction]: "20px", //將icon拆開，並且調整左右留白間距

      }}>
        {/* icon判斷式 */}
        {
          direction === "left"
            ? (<IoArrowBackCircleOutline size={50} onClick={onClick} />)
            : (<IoArrowForwardCircleOutline size={50} onClick={onClick} />)
        }
      </div>
    )
  }

  // 最後呈現的畫面結構
  return (
    <div className='wrap'>
      <h1>圖片輪播-Slide</h1>
      <div className='slide'>
        <div style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          margin: "auto"
        }}>


          {/* 左箭頭 */}
          <Arrow direction='left' onClick={prevSlide} />
          {/* 右箭頭 */}
          <Arrow direction='right' onClick={nextSlide} />
        </div>
      </div>
    </div>
  )
}

export default App