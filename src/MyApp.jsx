import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Topic from './pages/TopicDetailPage'
import Home from './pages/Home'
import Test from './pages/Test'



const MyApp = () => {
    return (
        <div className='wrap'>
            {/* 選單 */}
            <Nav></Nav>
            <hr />


            {/* 內容區 (抽換區) */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<Test />} />
                <Route path="/topic/:id" element={<Test />} />
            </Routes>
            {/* footer區 */}
            <Footer></Footer>

        </div>

    )
}

export default MyApp