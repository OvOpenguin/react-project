import '../css/App0811-weather.css'
// import 晴午後短暫雷陣雨 from '../images/weatherIcon/晴午後短暫雷陣雨.svg'
// import 多雲短暫陣雨 from '../images/weatherIcon/多雲短暫陣雨.svg'
// import 多雲午後短暫雷陣雨 from '../images/weatherIcon/多雲午後短暫雷陣雨.svg'
// import 傘 from'../images/weatherIcon/傘.png'
import { IoIosUmbrella } from "react-icons/io";




const App = () => {
    return (
        <>
            <div className='wrap'>
                <div className='title'><h1>臺北市</h1></div>
                <div className='cardContent'>
                    <div className='card'>
                        <h2>11日</h2>
                        <p>上午6:00<br />~<br />下午6:00</p>
                        {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才能讀到 */}
                        {/* public抓圖可以不用寫在路徑裡！意為從index角度去抓圖片 */}
                        {/* 若從import方式抓圖，需以src={變數名稱}抓*/}
                        <figure><img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="晴午後短暫雷陣雨" /></figure>
                        <p>晴午後短暫雷陣雨</p>
                        <p className='percentage'><IoIosUmbrella />80%</p>
                    </div>
                    <div className='card'>
                        <h2>11日</h2>
                        <p>下午6:00<br />~<br />上午6:00</p>
                        <figure><img src='./weatherIcon/多雲短暫陣雨.svg' alt="" /></figure>
                        <p>多雲短暫陣雨</p>
                        <p className='percentage'><IoIosUmbrella />40%</p>
                    </div>
                    <div className='card'>
                        <h2>12日</h2>
                        <p>上午6:00<br />~<br />下午6:00</p>
                        <figure><img src='./weatherIcon/多雲午後短暫雷陣雨.svg' alt="" /></figure>
                        <p>多雲午後短暫雷陣雨</p>
                        <p className='percentage'><IoIosUmbrella />40%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App