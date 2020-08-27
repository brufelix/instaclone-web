import React from 'react'
import { useHistory } from 'react-router-dom'

import img from '../../img/instaclone.png'
import { useAuth } from '../../hooks/auth'
import './Profile.css'

function Profile(): JSX.Element {
    const { signOut } = useAuth()
    let history = useHistory()

    const handleSignOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        signOut()
        history.push("/signin")
    }

    return (
        <>
            <header className="container-header-profile">
                <div className="img-container">
                    <img src={img} alt="image profile" />
                </div>
                <section className="container-section">
                    <div className="row01">
                        <h1>Name user</h1>
                        <button>Edit profile</button>
                        <button onClick={handleSignOut}>Sign out</button>
                    </div>
                    <div className="row02">
                        <ul>
                            <li><strong>29</strong> Publicações</li>
                            <li><strong>120</strong> Seguidores </li>
                            <li><strong>123</strong> Seguindo</li>
                        </ul>
                    </div>
                    <div className="bio">
                        <p>
                            Mais uma noite como todas as anteriores.
                            Pego minha caneca de café cheia,
                            acendo meu ultimo cigarro e corro pra velha janela do quarto.
                        </p>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Profile