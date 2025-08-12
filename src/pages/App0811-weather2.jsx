import { useEffect, useState } from 'react';
import '../css/App0811-weather2.css'
// import 晴午後短暫雷陣雨 from '../images/weatherIcon/晴午後短暫雷陣雨.svg'
// import 多雲短暫陣雨 from '../images/weatherIcon/多雲短暫陣雨.svg'
// import 多雲午後短暫雷陣雨 from '../images/weatherIcon/多雲午後短暫雷陣雨.svg'
// import 傘 from'../images/weatherIcon/傘.png'
import { IoIosUmbrella } from "react-icons/io";
import axios from 'axios';




const App = () => {

    // **(1)**建立一個react變數，使用useState Hook
    // 存放各縣市資料
    // const [變數名稱, 更改變數的方法] = useState(預設值);
    const [citys, setCitys] = useState([]);


    // 通過 useEffect(()=>{ },[]) 渲染後，只呼叫一次json資料就好。
    useEffect(() => {

        // 取得渲染後的DOM元素，要寫在useEffect裡面
        // let myH1 = document.querySelector("h1");
        // console.log(myH1);

        // async()=>{} 非同步取資料，搭配await
        (async () => {
            // 取得public中的json檔
            // const data = await axios.get('./json/F-C0032-001.json')
            // 取得src中的json檔
            const jsonData = await axios.get('./src/json/F-C0032-001.json')
            // 檢查是否連上json
            // console.log(data.data.cwaopendata.dataset);

            // **(2)**取得各縣市的氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            // **(3)**將各縣市資料透過 setCitys()方法，更新citys
            setCitys(location);
        })();
        // ()();前面括號放執行程式，後面的括號代表執行。




    }, [])




    return (
        <>
            {/* 36小時天氣預報版型 */}
            <h1>36小時天氣預報</h1>
            <div className="cards">
                {
                    citys.map((city) => {
                        return (
                            <div key={city.locationName}>
                                {/* 取得縣市跑回圈 */}
                                < div className='card' >
                                    {/* 卡片標題 */}
                                    < div className='cardTitle' > <h1>{city.locationName}</h1></div>
                                    {/* 卡片內容 */}
                                    <div className='cardContent'>

                                        {/* 取得陣列資料後跑回圈 */}
                                        {/* 顯示各縣市的3個欄位資訊 */}
                                        
                                        {
                                            city.weatherElement[0].time.map((item, index) => {
                                                return (
                                                    <div className='item' key={index}>

                                                        <div className='date'>
                                                            {/* 11日 */}
                                                            {/* 使用日期時間函式 toLocalString */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }
                                                        </div>
                                                        <div className='time'>
                                                            {/* <p>上午6:00<br />~<br />下午6:00</p> */}
                                                            {/* 開始 */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    hour: 'numeric',
                                                                    minute: "numeric"
                                                                })
                                                            }
                                                            <br />
                                                            ~
                                                            <br />
                                                            {/* 開始 */}
                                                            {
                                                                new Date(item.endTime).toLocaleString(undefined, {
                                                                    hour: 'numeric',
                                                                    minute: "numeric"
                                                                })
                                                            }
                                                        </div>
                                                        <div className='weatherName'>
                                                            {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才能讀到 */}
                                                            {/* public抓圖可以不用寫在路徑裡！意為從index角度去抓圖片 */}
                                                            {/* 若從import方式抓圖，需以src={變數名稱}抓*/}
                                                            {/* <figure><img src='./weatherIcon/晴午後短暫雷陣雨.svg' alt="晴午後短暫雷陣雨" /></figure> */}

                                                            <img style={{
                                                                width: "95px",
                                                                height: "95px"
                                                            }} src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                                                            <p>{item.parameter.parameterName}</p>

                                                        </div>
                                                        <div className='pop'>
                                                            {/* icon */}
                                                            <IoIosUmbrella></IoIosUmbrella>
                                                            {/* 80% */}
                                                            {`${city.weatherElement[4].time[index].parameter.parameterName}%`}

                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div >
                            </div>
                        )
                    })
                }

            </div >

        </>
    )
}

export default App