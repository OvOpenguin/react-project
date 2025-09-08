import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { scenarios } from '../json/ScenarioData'; // 假設你把章節資料抽成獨立檔案

import "../sass/test.scss"



// 獨立出選擇題元件
function Scenario({ data, onNext }) {
    const [selected, setSelected] = useState(null);
    const [decisionMade, setDecisionMade] = useState(false);
    const [truthRevealed, setTruthRevealed] = useState(false);

    const handleDecision = () => {
        if (selected) setDecisionMade(true);
    };

    const handleRetry = () => {
        setSelected(null);
        setDecisionMade(false);
        setTruthRevealed(false);
    };

    const current = data.decisions[selected];

    return (

        <section id="test">

            <div className='test-subject'><h3 >{data.name}</h3></div>

            <div className='test-content'>
                <p className="description-text">{data.intro}</p>
            </div>



            <div className='test-other'>


                {/* 選擇題 */}
                {!decisionMade && (
                    <div className='select-box'>

                        <h5>請選擇你的政策</h5>
                        {Object.entries(data.decisions).map(([key, value]) => (

                            <div key={key} className='btnBox'>
                                <button
                                    className={`btnSelect ${selected === key ? 'btnSelectActive' : ''}`}
                                    onClick={() => setSelected(key)}
                                >
                                    {key}：{value.outcome}
                                </button>
                            </div>

                        ))}

                        <br />
                        {/* 發布政策按鈕 */}
                        <button
                            className='check'
                            onClick={handleDecision}
                            disabled={!selected}
                        >
                            發布決策
                        </button>
                    </div>
                )}


                {/* 發布結果=歷史真相+選擇下一題 */}
                {decisionMade && current && (
                    <>
                        <div className='release-result'>
                            <h5>決策結果</h5>
                            <div className='outcome'>
                                <p>你選擇了：{selected}-{current.outcome}</p>
                                <p>民意反應：{current.reaction}</p>
                            </div>

                            {!truthRevealed && (
                                <button className="check btnTruth" onClick={() => setTruthRevealed(true)}>
                                    歷史真相
                                </button>
                            )}
                        </div>

                        {/* 歷史真相 */}
                        {truthRevealed && (
                            <div className='history'>
                                <h5>歷史真相</h5>
                                <div className='outcome'>
                                    <p>{current.truth}</p>
                                </div>

                            </div>
                        )}

                        {/* 選擇下一題或重新選擇 */}
                        <div className='cross'>
                            <button className="check" onClick={handleRetry}>
                                🔄 重新選擇
                            </button>

                        </div>

                    </>

                )}



            </div>

        </section>

    );
}


function ScenarioManager() {

    const { id } = useParams(); // 從 URL 取得章節索引
    const initialIndex = scenarios.findIndex(scenario => scenario.id === id);
    const [index, setIndex] = useState(initialIndex !== -1 ? initialIndex : 0);

    // 使用 useEffect 監聽 id 變化，並更新 index 狀態
    useEffect(() => {
        const newIndex = scenarios.findIndex(scenario => scenario.id === id);
        if (newIndex !== -1) {
            setIndex(newIndex);
        }
    }, [id]);

    // 切換章節的判斷，若完成到最後章節則顯示「所有章節已完成」
    const handleNextScenario = () => {
        if (index < scenarios.length - 1) {
            setIndex(index + 1);
        } else {
            alert('🎉 所有章節已完成！');
        }
    };

    // 隨機跳到另外章節，不照著順序
    const jumpToRandomScenario = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * scenarios.length);
        } while (randomIndex === index); // 避免跳到目前章節

        setIndex(randomIndex);
    };



    return (
        <main className='testwrap'>
            <Scenario
                key={index}
                data={scenarios[index]}
                onNext={handleNextScenario}
            />

            <section id='box'>
                <button className='check' onClick={jumpToRandomScenario}>
                    🎲 隨機跳轉時空
                </button>
                <button className="check" onClick={handleNextScenario}>
                    ⏭️ 回溯下一個時空
                </button>
            </section>
        </main>
    );
}

export default ScenarioManager;
