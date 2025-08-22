import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul>
                {/* 原先：<li><a href="#">News</a></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </div>
    )
}

export default Nav