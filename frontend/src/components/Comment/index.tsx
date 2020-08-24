import React from 'react'
import './Comment.css'

export default () => {
    return (
        <div className="container-comment"
            style={{
                display: "flex", flexDirection: "row", alignItems: "center",
                justifyContent: "space-between"
            }}>
            <input className="field" type="text" placeholder="Adicionar um comentario..." />
            <button className="button">Publicar</button>
        </div>
    )
}