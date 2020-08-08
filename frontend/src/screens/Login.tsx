import React, { Component } from 'react'
import '../styles/Login.css'

class Login extends Component {
    render(){
        return(
            <div className="container">
                <h1 className="title">Instagram</h1>
                <form className="form" action="" method="post">
                    <input className="input" type="text" 
                        placeholder="Telefone, nome de usuário ou email"/>
                    <input className="input" type="password"
                        placeholder="Senha"/>
                    <button className="button signin" disabled={true} type="button">Entrar</button>
                </form>
                <span className="ou">OU</span>
                <span className="text" >Não tem uma conta?    
                    <a href="/signup">     Cadastre-se</a></span>
            </div>
        )
    }
}

export default Login