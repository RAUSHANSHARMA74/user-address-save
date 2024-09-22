import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img src="/logo.jpg" alt="" />
            </Link>
            <div className="right">
                <Link className='link' to="/"> <span>Home</span> </Link>
                <Link className='link' to="/about"> <span>About</span> </Link>
                <Link className='link' to="/users"> <span>Users</span> </Link>
            </div>
        </div>
    )
}
