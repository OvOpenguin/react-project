import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
    // 檢查是否連上api
    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    const api = 'https://api.unsplash.com/search/photos/';
    const accessKey = 'N3lkzuxBJsNY_X_5-uhxd-xbR3ymE2t1iZITfBPsDBs';
    const [filterString, setFilterString] = useState('penguin');

    // 建立非同步法，取得遠端資料
    const getPhotos = async () => {
        console.log(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 發出請求給遠端 api，傳回結果。
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 全部資料
        console.log(result);
    }

    getPhotos();

    // VPwhtQTLDqapnJjo88o9JZxaIWRHET1FcgEIyoOe2JQap8pvClHtu4Fv


    return (
        <div>App</div>
    )
}

export default App