import Search from '../components/Search'
import Picture from '../components/Picture'
import '../css/styleApi.css'
import { useEffect, useState } from 'react'

const App0909 = () => {

  // 文字方塊內容
  const [input, setInput] = useState(null);
  // 資料
  const [data, setData] = useState([]);
  // 目前頁數
  const [page, setPage] = useState(1);
  // 目前查詢內容
  const [curSearch, setCurSearch] = useState('');

  // Api key
  const auth = "VPwhtQTLDqapnJjo88o9JZxaIWRHET1FcgEIyoOe2JQap8pvClHtu4Fv";
  // 精選照片連結 (依照pexels文件)
  const initialURL = `https://api.pexels.com/v1/curated?per_page=10&page=1`;
  // 關鍵字搜尋連結
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=1`;

  // 取得圖片資料 async(放參數) 搭配 await
  const search = async (url) => {
    // 更改頁數
    setPage(2);

    // 連上api
    const dataFetch = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      }
    });
    // 取得資料
    const photosData = await dataFetch.json();
    // console.log(photosData);
    setData(photosData.photos);
  }

  // 更多圖片按鈕
  const morePic = async () => {
    let newURL;
    if (curSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;
    }

    // 連上api
    const dataFetch = await fetch(newURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    });
    // 取得資料
    const photosData = await dataFetch.json();
    // console.log(photosData);
    setData(data.concat(photosData.photos)); 

    // 更改頁數
    setPage(page+1)

  }




  // 網頁一進來，就呼叫search函式
  useEffect(() => {
    search(initialURL);
  }, [])

  // curSearch異動時，重新取得圖片
  useEffect(() => {
    if (curSearch === '') {
      // 沒有關鍵字 => 執行預設連結
      search(initialURL);
    } else {
      // 有關鍵字 => 執行關鍵字連結
      search(searchURL);
    }
  }, [curSearch])








  return (
    <div>
      {/* 搜尋列 */}
      <Search
        // 按下search按鈕時，將查詢的關鍵字帶入searchURL後，再執行。
        search={() => {
          setCurSearch(input);
        }}
        // 取得文字方塊內容
        setInput={setInput}
      />

      {/* 顯示圖片 */}
      <div className="pictures">

        {
          // 檢查data是否有資料
          // &&表示有資料
          data &&
          data.map((pic) => {
            return (<Picture key={pic.id} data={pic} />)
          })
        }


      </div>

      {/* 更多圖片 */}
      <div className="morePicture">
        <button
          onClick={morePic}
        >Load more</button>
      </div>
    </div>
  )
}

export default App0909