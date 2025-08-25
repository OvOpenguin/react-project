

const App = () => {
    const arrCitys = [
        {
            cityId: 1,
            cityName: "台北市",
        }, {
            cityId: 2,
            cityName: "新北市",
        }, {
            cityId: 3,
            cityName: "基隆市",
        }
    ]





    return (
        <div>
            <h1>Local storage - 陣列物件資料讀取</h1>
            <button onClick={() => {
                // 轉為字串前
                console.log(arrCitys);
                // 陣列轉為字串
                let strCity = JSON.stringify(arrCitys);
                console.log(strCity);
                console.log( typeof strCity);
                // 寫入
                window.localStorage.setItem("citys", strCity);
            }}>寫入</button>


            <button onClick={() => { 
                // console.log(window.localStorage.getItem("citys"));
                // 取出local storage資料
                let getData = window.localStorage.getItem("citys");
                // 字串轉為陣列物件
                let getArrData = JSON.parse(getData);
                console.log(getArrData);
                console.log( typeof getArrData);

            }}>讀取</button>

        </div>
    )
}

export default App