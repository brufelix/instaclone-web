import React, { useState, useEffect } from 'react'
import { BsFillHouseFill, BsSearch, BsHeart } from 'react-icons/bs'
import { FaTelegramPlane, FaRegCompass, FaUserCircle } from 'react-icons/fa'
import './Header.css'

function Header() {
    const [user, setUser] = useState({ name: "" })

    useEffect(() => {
        const data: string | null = localStorage.getItem("@instaclone:user")
        const objJson: { name: string } = JSON.parse(data ? data : "")
        setUser(objJson)
    }, [])

    return (
        <nav className="nav">
            <div className="header">
                <h2>Instagram</h2>
                <div className="search-container">
                    <BsSearch className="icon-search" />
                    <input className="input-search" type="text" placeholder={`         Pesquisar`} />
                </div>
                <div className="icons-container">
                    <a href="/home/feed">
                        <BsFillHouseFill className="icons" size="23px" />
                    </a>
                    <a href="/inbox">
                        <FaTelegramPlane className="icons" size="23px" />
                    </a>
                    <a href="/location">
                        <FaRegCompass className="icons" size="23px" />
                    </a>
                    <a href="/notifications">
                        <BsHeart className="icons" size="23px" />
                    </a>
                    <a href={`/home/${user.name}`}>
                        <FaUserCircle className="icons" size="23px" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Header