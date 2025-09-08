import { AnimatePresence, motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

const Faq = () => {

    const [activeFaq, setActiveFaq] = useState(null)

    // FAQ資料
    const question = [
        {
            id: 1,
            question: "題目一",
            answer: "答案1",
        },
        {
            id: 2,
            question: "題目二",
            answer: "答案2",
        },
        {
            id: 3,
            question: "題目三",
            answer: "答案3",
        },
    ]

    return (
        <div className='wrap' style={{
            maxWidth: '100vw',
            height: '100vh',
            backgroundColor: '#888888ff',
        }}>
            <div className='accordion' style={{
                width: "80%",
                margin: 'auto',
                maxWidth: '1400px',
                backgroundColor: '#ccc',
                padding: '8px',
                borderRadius: '5px',
            }}>
                <h1 style={{
                    textAlign: 'center',
                    marginBottom: '6px',
                }}>Faq</h1>


                {
                    // 帶出陣列資料
                    question.map((q) => {
                        return (
                            <div key={q.id} style={{ marginBottom: '10px' }}>
                                {/* Q/A按鈕 */}
                                <button
                                    onClick={() => {
                                        setActiveFaq(activeFaq === q.id ? null : q.id)
                                    }}
                                    style={{
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        padding: '5px 10px',
                                        textAlign: 'left',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                    {/* 帶出題目 */}
                                    {q.question}
                                    {/* 加減號icon */}
                                    {activeFaq === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                </button>
                                {/* 摺疊動畫 */}
                                <AnimatePresence>
                                    {
                                        activeFaq === q.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{
                                                    marginTop:'5px',
                                                    paddingLeft:'10px', 
                                                    color:'#333',
                                                    fontSize:'.75rem',
                                                }}
                                            >
                                                {q.answer}
                                            </motion.div>
                                        )
                                    }
                                </AnimatePresence>
                            </div>
                        )
                    })
                }





            </div>




        </div>
    )
}

export default Faq