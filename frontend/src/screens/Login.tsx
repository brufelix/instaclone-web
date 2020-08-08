import React, { Component } from 'react'
import gql from 'graphql-tag'
import api from '../config/graphql'
import { TState, TDataSignin } from '../types/types'
import '../styles/Login.css'

class Login extends Component<{}, TState> {
    
    constructor(props: TState) {
        super(props)
        this.state = {email: '', password: ''}
        this.setEmail.bind(this)
        this.signin.bind(this)
    }

    setEmail(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value })
    } 

    setPassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value })
    }

    signin() {
        const { email, password } = this.state
        if (email.trim() && password.trim()) {
            api.query<TDataSignin>({
                query: gql`
                    query($email: String! $password: String!) { 
                        signin(data: { email: $email password: $password }) {
                            valid token
                        }
                    }
                `,
                variables: {email, password}
            }).then(res => {
                const {token, valid} = res.data.signin
                if (valid) {
                    localStorage.setItem("token", token)
                    this.setState({email: "", password: ""})
                } else {
                    this.setState({email: "", password: ""})
                }
            })
        } else {
            alert("Preencha Email e Senha!")
        }
    }
    
    render(){
        const {email, password} = this.state
        return(
            <div className="container">
                <div className="container-signin">
                    <h1 className="title">Instagram</h1>
                    <form className="form-signin" action="" method="post">
                        <input className="input" type="text" placeholder="Telefone, nome de usuário ou email" 
                        onChange={(event) => this.setEmail(event)} value={email} />
                        <input className="input" type="password" value={password}
                            placeholder="Senha" onChange={(event) => this.setPassword(event)}/>
                        <button className="button signin" type="button"
                        onClick={() => this.signin()}>Entrar</button>
                        <div className="ou">
                            <div className="liner"></div>
                            <span className="ou-text">OU</span>
                            <div className="liner"></div>
                        </div>
                    </form>
                </div>
                <div className="container-signup">
                    <span className="text" >Não tem uma conta?    
                        <a href="/signup">     Cadastre-se</a></span>
                </div>
            </div>
        )
    }
}

export default Login