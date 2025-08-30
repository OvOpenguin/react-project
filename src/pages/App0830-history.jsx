import { useState } from 'react';

// 建立章節選項
const scenarios = [
    {
        name: '第一章節：貨幣改革',
        intro: '你是新任財政部長，面對通膨危機，必須做出決策。',
        decisions: {
            A: {
                outcome: '全面發行新貨幣，舊幣作廢',
                reaction: '民眾恐慌，銀行擠兌',
                truth: '魏瑪共和的貨幣改革曾引發類似情況'
            },
            B: {
                outcome: '凍結物價與工資三個月',
                reaction: '企業反彈，黑市興起',
                truth: '1971年美國尼克森政府曾實施類似政策'
            },
            C: {
                outcome: '提高利率以抑制通膨',
                reaction: '房市崩跌，失業率上升',
                truth: '1980年代美國聯準會曾採取此策略'
            }
        }
    },
    {
        name: '第二章節：金融危機應對',
        intro: '你是中央銀行總裁，面對銀行倒閉潮，必須做出抉擇。',
        decisions: {
            A: {
                outcome: '全面救助所有銀行',
                reaction: '國家債務暴增，市場信心回穩',
                truth: '2008年美國採取類似策略救助大型銀行'
            },
            B: {
                outcome: '只救助系統性重要銀行',
                reaction: '中小銀行倒閉，民怨四起',
                truth: '冰島選擇不救助銀行，引發社會動盪'
            },
            C: {
                outcome: '不介入市場，自由競爭淘汰',
                reaction: '金融市場崩潰，全球連鎖反應',
                truth: '1929年美國大蕭條初期曾採取放任政策'
            }
        }
    }
];

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
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h2>{data.name}</h2>
            <p>{data.intro}</p>

            {!decisionMade && (
                <div>
                    {Object.entries(data.decisions).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => setSelected(key)}
                            style={{
                                margin: '0.5rem',
                                backgroundColor: selected === key ? '#ffd700' : '#eee'
                            }}
                        >
                            {key}. {value.outcome}
                        </button>
                    ))}
                    <br />
                    <button
                        onClick={handleDecision}
                        disabled={!selected}
                        style={{ marginTop: '1rem' }}
                    >
                        📢 發布決策
                    </button>
                </div>
            )}

            {decisionMade && current && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>📉 決策結果</h3>
                    <p>你選擇了：{selected}</p>
                    <p>結果：{current.outcome}</p>
                    <p>民意反應：{current.reaction}</p>

                    {!truthRevealed && (
                        <button onClick={() => setTruthRevealed(true)} style={{ marginTop: '1rem' }}>
                            🕵️‍♂️ 顯示歷史真相
                        </button>
                    )}

                    {truthRevealed && (
                        <div style={{ marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
                            <h4>📜 歷史真相</h4>
                            <p>{current.truth}</p>
                        </div>
                    )}

                    <div style={{ marginTop: '2rem' }}>
                        <button onClick={handleRetry} style={{ marginRight: '1rem' }}>
                            🔄 重新選擇
                        </button>
                        <button onClick={onNext}>
                            ⏭️ 回溯下一個時空
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}




function ScenarioManager() {
    const [index, setIndex] = useState(0);

    const handleNextScenario = () => {
        if (index < scenarios.length - 1) {
            setIndex(index + 1);
        } else {
            alert('🎉 所有章節已完成！');
        }
    };

    return<Scenario
    key={index} 
    data={scenarios[index]} 
    onNext={handleNextScenario} />;
}

export default ScenarioManager;
