// Map.jsx
import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";



// 假活動資料
const FlowerEvent = [
  {
    id: 1,
    lable: "台北",
    month: "3月",
    location: "臺北市",
    flower: "櫻花",
    lat: 25.033,
    lng: 121.5654,
    img: "https://placehold.co/200x120",
    date: "03.01 — 03.31",
    title: "陽明山櫻花祭",
  },
  {
    id: 2,
    lable: "新北",
    month: "4月",
    location: "新北市",
    flower: "玫瑰",
    lat: 25.012,
    lng: 121.4628,
    img: "https://placehold.co/200x120",
    date: "04.01 — 04.30",
    title: "淡水玫瑰園",
  },
  {
    id: 3,
    lable: "宜蘭",
    month: "6月",
    location: "宜蘭縣",
    flower: "木棉花",
    lat: 24.757,
    lng: 121.754,
    img: "https://placehold.co/200x120",
    date: "06.01 — 06.15",
    title: "羅東木棉花道",
  },
];

// 活動卡片
const Mapcard = ({ item, onClick }) => (
  <button className="map-card" onClick={() => onClick(item.id)}>
    <p className="map-lable">{item.lable}</p>
    <img src={item.img} className="map-img" alt="" />
    <div className="map-date">{item.date}</div>
    <h3 className="map-title">{item.title}</h3>
  </button>
);

const Map = () => {
  const [selectedlocation, setSelectedLocation] = useState("");
  const oplocation = ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"];
  const [selectmonth, setSelectMonth] = useState("");
  const opmonth = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
  const [selectedflower, setSelectedFlower] = useState("");
  const opflower = ["玫瑰", "櫻花", "梅花", "木棉花", "茶花"];

  const [activeId, setActiveId] = useState(null); // 目前選中的活動 ID
  const markerRefs = useRef({}); // 存放 marker 的 ref

  // 篩選活動
  const filtered = FlowerEvent.filter((item) => {
    return (
      (selectmonth === "" || item.month === selectmonth) &&
      (selectedlocation === "" || item.location === selectedlocation) &&
      (selectedflower === "" || item.flower === selectedflower)
    );
  });

  // 當點擊卡片 → zoom 到該 marker & 打開 popup
  const FlyToMarker = ({ lat, lng, id }) => {
    const map = useMap();
    if (lat && lng && id) {
      map.flyTo([lat, lng], 12, { duration: 1.5 });
      // 延遲一點打開 popup
      setTimeout(() => {
        markerRefs.current[id]?.openPopup();
      }, 800);
    }
    return null;
  };

  const activeItem = FlowerEvent.find((f) => f.id === activeId);

  return (
    <section className="map-inner">
      <div className="map-search">
        <h2>花卉地圖 MAP</h2>
        <div className="map-selectAll">
          <div className="map-select">
            <select value={selectmonth} onChange={(e) => setSelectMonth(e.target.value)}>
              <option value="">月份</option>
              {opmonth.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select value={selectedlocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="">地區</option>
              {oplocation.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <select value={selectedflower} onChange={(e) => setSelectedFlower(e.target.value)}>
              <option value="">品種</option>
              {opflower.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 地圖 */}
        <div className="map-map" style={{ height: "500px" }}>
          <MapContainer center={[23.7, 120.9]} zoom={7} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filtered.map((item) => (
              <Marker
                key={item.id}
                position={[item.lat, item.lng]}
                ref={(ref) => { markerRefs.current[item.id] = ref; }}
              >
                <Popup>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.lable} | {item.date}</p>
                    <img src={item.img} alt={item.title} width="150" />
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* 飛到 & 打開 popup */}
            {activeItem && <FlyToMarker lat={activeItem.lat} lng={activeItem.lng} id={activeItem.id} />}
          </MapContainer>
        </div>
      </div>

      {/* 活動清單 */}
      <div className="map-event">
        <div className="map-e-title">
          <h2>賞花活動 EVENT</h2>
        </div>
        <div className="map-cardWarp">
          {filtered.map((item) => (
            <Mapcard key={item.id} item={item} onClick={(id) => setActiveId(id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
