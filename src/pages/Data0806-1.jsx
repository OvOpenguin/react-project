import '../css/App0806-1.css'

const APP = () => {
    // 資料抽離
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1754254082673-68b06be1308f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '滑翔翼',
            desc: "白日夢冒險王",
            btnName: '展開冒險',
            btnURL: 'https://images.unsplash.com/photo-1754254082673-68b06be1308f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2:{
            imgURL:'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'咖啡廳',
            desc:'享受悠閒時光',
            btnName:'預約餐廳',
            btnURL:'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1754075756602-33e079cbc022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '日本街頭',
            desc: '探訪街頭巷尾',
            btnName: '街頭漫遊',
            btnURL: 'https://images.unsplash.com/photo-1754075756602-33e079cbc022?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }

    return (
        <>
            <div className='container'>
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn btn-primary">{photos.photo1.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn btn-primary">{photos.photo2.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn btn-primary">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default APP;