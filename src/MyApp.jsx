import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'


const MyApp = () => {
    return (
        <div className='wrap'>
            {/* 選單 */}
            <Nav></Nav>
            <hr />


            {/* 內容區 (抽換區) */}
            <Routes>
                {/* 首頁 */}
                <Route path="/" element={<Home />}></Route>
                {/* About */}
                <Route path="/about" element={<About />} ></Route>
                {/* About */}
                <Route path="/news" element={<News />} ></Route>
            </Routes>

            

            


            {/* footer區 */}
            <Footer></Footer>

        </div>

    )
}

export default MyApp