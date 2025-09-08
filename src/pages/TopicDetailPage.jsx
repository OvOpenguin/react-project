import { useParams, Link } from 'react-router-dom';

// 題目與圖像的資料
const topics = [
    {
        id: "1",
        title: '臺北市立動物園',
        image: './images/p1.jpg',
        description: '臺北市立動物園佔地廣大，是亞洲最大的動物園之一，園內有來自世界各地的珍稀動物，是闔家出遊的好去處。'
    },
    {
        id: "2",
        title: '九份老街',
        image: './images/p2.jpg',
        description: '九份老街以其獨特的懷舊氣氛聞名，蜿蜒的石階、古老的茶樓和豐富的小吃，吸引無數遊客前來感受歷史風情。'
    },
    {
        id: "3",
        title: '淡水漁人碼頭',
        image: './images/p3.jpg',
        description: '淡水漁人碼頭的夕陽美景舉世聞名，情人橋、木棧道和停泊的船隻構成一幅美麗的畫卷，是情侶約會的熱門地點。'
    },
    {
        id: "4",
        title: '日月潭',
        image: './images/p4.jpg',
        description: "日月潭好讚!",
    },
];

function TopicDetailPage() {
    const { topicTitle } = useParams(); // 從 URL 參數中取出 topicTitle

    // 根據 URL 參數尋找對應的題目資訊
    const currentTopic = topics.find(topic => topic.id === topicTitle);

    if (!currentTopic) {
        return (
            <div>
                <h1>找不到該題目</h1>
                <p>請回到 <Link to="/">選題頁面</Link> 重新選擇。</p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{currentTopic.title}</h1>
            <div style={{ border: '2px solid #ccc', padding: '10px', display: 'inline-block' }}>
                <img
                    src={currentTopic.image}
                    alt={currentTopic.title}
                    style={{ maxWidth: '100%', maxHeight: '400px' }}
                />
            </div>
            <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{currentTopic.description}</p>
            <br />
            <Link to="/">
                <button>返回選題頁面</button>
            </Link>
        </div>
    );
}

export default TopicDetailPage;