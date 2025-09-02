import React, { useMemo, useState } from 'react'

const App0902a = () => {


    // 表格資料(商品陣列資料)
    const arrProd = [
        {
            id: 1,
            prodName: '筆電',
            prodPrice: '80',
            probImgUrl: './images/p1.jpg'
        },
        {
            id: 2,
            prodName: '人物1',
            prodPrice: '100',
            probImgUrl: './images/p2.jpg'
        },
        {
            id: 3,
            prodName: '人物2',
            prodPrice: '150',
            probImgUrl: './images/p3.jpg'
        },
        {
            id: 4,
            prodName: '自拍視角',
            prodPrice: '50',
            probImgUrl: './images/p4.jpg'
        },
        {
            id: 5,
            prodName: '街景',
            prodPrice: '80',
            probImgUrl: './images/p5.jpg'
        },
        {
            id: 6,
            prodName: '咖啡廳',
            prodPrice: '200',
            probImgUrl: './images/p6.jpg'
        }
    ]
    // 建立表格元件
    const ProdTable = ({ ascFilterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {/* jsx中撰寫js語法必須方大括號內，且要記得return() */}
                    {
                        ascFilterProds.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '100px',
                                        }}>
                                        {item.prodName}
                                    </td>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '300px',
                                        }}
                                    >
                                        <img
                                            src={item.probImgUrl}
                                            alt={item.prodName}
                                            style={{ width: '150px' }} />
                                    </td>

                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '100px',
                                        }}
                                    >{item.prodPrice}</td>
                                </tr>
                            )

                        })

                    }
                </tbody>
            </table >
        )
    }

    // 陣列變數，預設為商品陣列資料
    const [prods, setProds] = useState(arrProd)

    // 排序變數，預設為遞增
    const [asc, setAsc] = useState(true)

    // 搜尋變數，預設為空字串
    const [search, setSearch] = useState('');

    // 建立排序與搜尋函式
    const ascFilterProds = useMemo(() => {
        return [...prods]  //prods來自95行宣告的陣列變數，預設為原先arrProd陣列物件資料
            // 排序
            .sort((a, b) => {
                return asc ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
            })

            // 搜尋
            .filter((prod) => {
                return prod.prodName.match(search);
            })

    }, [asc, search])   //[ ]內代表useMeomo的觸發條件=> 當[]有異動才觸發，助於優化效能。




    return (
        <>
            <div className='wrap'>
                <h1>useMemo 搜尋與排序</h1>
                <hr />
                排序：
                <input
                    type="checkbox"
                    // 綁定排序變數
                    checked={asc}
                    // 當核取方塊有異動，更新排序變數
                    onChange={(e) => { setAsc(e.target.checked) }}
                />
                <br />
                搜尋：
                <input
                    type="text"
                    // 綁定搜尋變數
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }} />

                {/* 表格元件-元件屬性和函式傳遞 */}
                <ProdTable ascFilterProds={ascFilterProds} />
            </div>


        </>
    )
}

export default App0902a