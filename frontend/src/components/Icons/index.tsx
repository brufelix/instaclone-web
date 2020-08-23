import React from 'react'
import { FaComment, FaHeart, FaTelegramPlane } from 'react-icons/fa'

export default () => {
    return(
        <div style={{ display: "flex", flexDirection:"row", 
            justifyContent: "flex-start", alignItems:"center", marginBottom: "5px" }}>
            <FaComment style={{marginLeft: "5px", marginRight: "8px"}} size="28px"/>
            <FaHeart style={{marginRight: "8px"}} size="28px"/>
            <FaTelegramPlane style={{marginRight: "8px"}} size="28px"/>
        </div>
    )
}