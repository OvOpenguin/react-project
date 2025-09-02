import { useState } from 'react';

// 建立章節選項
const scenarios = [
    {
        name: '第1章節：貨幣改革',
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
        name: '第2章節：金融危機應對',
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
    }, {
        name: '第3章節：債務危機抉擇',
        intro: '你是某新興國家的財政顧問，國家面臨外債違約風險，必須選擇應對策略。',
        decisions: {
            A: {
                outcome: '向IMF申請紓困貸款',
                reaction: '需接受嚴格財政緊縮，民怨四起',
                truth: '1997年亞洲金融風暴期間，韓國曾接受IMF援助並實施緊縮政策'
            },
            B: {
                outcome: '宣布暫停償債，尋求重組',
                reaction: '國際信評下調，資金外逃',
                truth: '阿根廷在2001年曾暫停償債，引發經濟動盪'
            },
            C: {
                outcome: '發行高利率債券吸引資金',
                reaction: '短期資金湧入，但長期債務負擔加重',
                truth: '希臘在歐債危機期間曾以高利率籌資，導致債務惡化'
            }
        }
    }, {
        name: '第4章節：數位貨幣試驗',
        intro: '你是中央銀行總裁，正考慮推出官方數位貨幣（CBDC），需評估影響。',
        decisions: {
            A: {
                outcome: '全面推行數位貨幣，取代現金',
                reaction: '便利提升，但弱勢族群受限',
                truth: '中國在部分城市試行數位人民幣，引發支付習慣改變'
            },
            B: {
                outcome: '僅在特定區域試點推行',
                reaction: '民眾接受度高，但難以評估全國影響',
                truth: '巴哈馬推出 Sand Dollar，採漸進式推行策略'
            },
            C: {
                outcome: '暫緩推行，觀察國際趨勢',
                reaction: '被批評保守，失去創新領導地位',
                truth: '美國聯準會對CBDC持審慎態度，尚未全面推行'
            }
        }
    }, {
        name: '第5章節：金融教育改革',
        intro: '你是教育部長，面對年輕世代理財能力低落，需改革課綱。',
        decisions: {
            A: {
                outcome: '將金融素養納入必修課程',
                reaction: '教師培訓壓力大，課程整合困難',
                truth: '澳洲已將金融教育納入中小學課綱，成效逐步顯現'
            },
            B: {
                outcome: '與民間平台合作推出互動教材',
                reaction: '教材品質參差，引發審查爭議',
                truth: '美國部分州與金融機構合作推出理財模擬工具'
            },
            C: {
                outcome: '設立理財競賽與獎學金制度',
                reaction: '激發學習動機，但可能排擠弱勢學生',
                truth: '新加坡推動學生理財競賽，提升金融參與度'
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


    // 隨機
    const jumpToRandomScenario = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * scenarios.length);
        } while (randomIndex === index); // 避免跳到目前章節

        setIndex(randomIndex);
    };

    return (
        <div>
            <Scenario
                key={index}
                data={scenarios[index]}
                onNext={handleNextScenario}
            />
            <button onClick={jumpToRandomScenario} style={{ marginTop: '1rem' }}>
                🎲 隨機跳轉時空
            </button>
        </div>
    );
}

export default ScenarioManager;
