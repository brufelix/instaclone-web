import React, { Component } from 'react'
import gql from 'graphql-tag'
import api from '../../config/graphql'
import { TState, TDataSignin } from '../../types/types'
import { IProps } from '../../types/interfaces'
import './Authentication'

const initialState: TState = {
    name: "", email: '', password: '', stage: false
}

class Login extends Component<IProps, TState> {
    
    constructor(props: IProps) {
        super(props)
        this.state = {...initialState}
        this.setEmail.bind(this)
        this.signin.bind(this)
        this.signup.bind(this)
    }

    setEmail(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: event.target.value })
    } 

    setPassword(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value })
    }

    setName(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({ name: event.target.value })
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
                    this.setState({...initialState})
                    this.props.history.push("/Feed")
                } else {
                    this.setState({...initialState})
                }
            })
        } else {
            alert("Preencha Email e Senha!")
        }
    }
    
    signup() {
        const {email, name, password} = this.state
        api.mutate({
            mutation: gql`
                mutation($name: String! $email: String! $password: String!) {
                    signup(data: { name: $name email: $email password: $password }) {
                        name email password
                    }
                }`,
                variables: {name, email, password}
        }).then(res => {
            this.setState({...initialState})
        })
    }

    render(){
        const {name, email, password, stage} = this.state
        return(
            <div className="container">
                <div className="container-signin">
                    <h1 className="title">Instagram</h1>
                    <form className="form-signin" method="post">
                        {stage && <input className="input" type="text" onChange={(event) => this.setName(event)} 
                            placeholder="Nome de usuário" value={name} />}
                        <input className="input" type="text" placeholder="Telefone, nome de usuário ou email" 
                            onChange={(event) => this.setEmail(event)} value={email} />
                        <input className="input" type="password" value={password}
                            placeholder="Senha" onChange={(event) => this.setPassword(event)}/>
                        <button className="button signin" type="button" 
                            onClick={() => stage ? this.signup() : this.signin()}> { stage ? "Cadastra-se" : "Entrar" }
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
                        <button className="register-login" onClick={() => this.setState({stage: !stage})}>  
                            {stage ? "   Acessar" : "   Cadastra-se"}
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Login