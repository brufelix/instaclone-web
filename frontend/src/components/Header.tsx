import React from 'react'
import '../styles/header.css'
import { BsFillHouseFill, BsSearch, BsHeart } from 'react-icons/bs'
import { FaTelegramPlane, FaRegCompass } from 'react-icons/fa'

export default () => {
    return(
        <React.StrictMode>
            <div className="header">
                <h2>Instagram</h2>
                <div className="search-container">
                    <BsSearch className="icon-search" size="10px"/>
                    <input className="input-search" type="text" placeholder={`         Pesquisar`} />
                </div>
                <div className="icons-container">
                    <BsFillHouseFill className="icons" size="28px" />
                    <FaTelegramPlane className="icons" size="28px"/> 
                    <FaRegCompass className="icons" size="28px"/>
                    <BsHeart className="icons" size="28px"/>
                </div>
            </div>
        </React.StrictMode>
    )
}