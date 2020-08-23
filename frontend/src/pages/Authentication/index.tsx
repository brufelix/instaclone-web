import React, { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import './Authentication.css'

function Authentication() {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [stage, setStage] = useState(false)

    function handleSignIn() {
        const { signIn } = useAuth()

        signIn({ email, password })
    }

    return(
        <div className="container">
        <div className="container-signin">
            <h1 className="title">Instagram</h1>
            <form className="form-signin" method="post">
                {stage && <input className="input" type="text" onChange={(event) => setName(event.target.value)} 
                    placeholder="Nome de usuário" value={name} />}
                <input className="input" type="text" placeholder="Telefone, nome de usuário ou email" 
                    onChange={(event) => setEmail(event.target.value)} value={email} />
                <input className="input" type="password" value={password}
                    placeholder="Senha" onChange={(event) => setPassword(event.target.value)}/>
                <button className="button signin" type="button" 
                    onClick={() => handleSignIn()}> 
                        { stage ? "Cadastra-se" : "Entrar" }
                </button>
            </form>
            <div className="ou">
                <div className="liner"></div>
                <span className="ou-text">OU</span>
                <div className="liner"></div>
            </div>
        </div>
        <div className="container-signup">
            <span className="text" >{stage ? "Tem uma conta?" : "Não tem uma conta?"}
                <button className="register-login" onClick={() => setStage(!stage)}>  
                    {stage ? "   Acessar" : "   Cadastra-se"}
                </button>
            </span>
        </div>
    </div>
        )
}

export default Authentication


