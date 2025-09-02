import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scenarios } from '../json/ScenarioData'; // 假設你把章節資料抽成獨立檔案


function FateSelector() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleDraw = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * scenarios.length);
    } while (randomIndex === selectedIndex); // 避免重複抽到

    setSelectedIndex(randomIndex);
    setConfirmed(false);
  };

  const handleAcceptFate = () => {
    setConfirmed(true);
    navigate(`/scenario/${selectedIndex}`); // 導向指定章節頁面
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>
      <h2>🎬 命運播放器</h2>
      <button onClick={handleDraw} style={{ padding: '1rem', fontSize: '1.2rem' }}>
        ▶️ 播放命運
      </button>

      {selectedIndex !== null && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📜 命運揭示：</h3>
          <p>{scenarios[selectedIndex].name}</p>
          <p>{scenarios[selectedIndex].intro}</p>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleAcceptFate} style={{ marginRight: '1rem' }}>
              ✅ 接受命運
            </button>
            <button onClick={handleDraw}>
              🔄 拒絕命運，重新抽選
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FateSelector;
