import Card from '../components/Card';
import '../css/App0806-1.css'


// 建立[陣列]物件資料
const arrCard = [
    {
        id: 1,
        imgURL: 'https://images.unsplash.com/photo-1754254082673-68b06be1308f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '滑翔翼',
        desc: "白日夢冒險王",
        btnName: '展開冒險',
        btnURL: 'https://images.unsplash.com/photo-1754254082673-68b06be1308f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        imgURL: 'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '咖啡廳',
        desc: '享受悠閒時光',
        btnName: '預約餐廳',
        btnURL: 'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    },
    {
        id: 3,
        imgURL: 'https://images.unsplash.com/photo-1754075756602-33e079cbc022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '日本街頭',
        desc: '探訪街頭巷尾',
        btnName: '街頭漫遊',
        btnURL: 'https://images.unsplash.com/photo-1754075756602-33e079cbc022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    }
]

const APP = () => {
    return (
        <>
            <div className="container">
                {
                    arrCard.map((card) => {
                        return (
                            <Card
                                key={card.id}  //每一個陣列物件資料需有一個唯一值，以 key={}做紀錄
                                imgURL={card.imgURL}
                                title={card.title}
                                desc={card.desc}
                                btnName={card.btnName}
                                btnURL={card.btnURL}>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )

}
export default APP;