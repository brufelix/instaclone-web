import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import './Authentication.css'

function SignIn(): JSX.Element {

    let history = useHistory()
    const [err, setError] = useState<String>("")
    const { register, handleSubmit, errors } = useForm()
    const { signIn } = useAuth()

    const onSubmit = useCallback(
        (data: any) => {
            const { email, password } = data
            try {
                signIn({ email, password })
                    .then((valid: boolean) => {
                        if (valid) {
                            history.push('/home/feed')
                        } else {
                            setError("Authentication error :(")
                        }
                    })
            } catch (err) {
                throw new Error("Error on sign in")
            }
        }, [signIn, history])

    return (
        <div className="container">
            <h1 className="title">Instagram</h1>
            {err.trim() && <p className="error">{err}</p>}
            <div className="login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Telefone, nome de usuário ou e-mail..."
                        type="email"
                        id="inputEmail"
                        name="email"
                        ref={register({
                            required: "Enter your e-mail",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Enter a valid e-mail address",
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                    <input
                        placeholder="Password"
                        type="password"
                        id="inputPassword"
                        name="password"
                        ref={register({
                            required: "Enter your password",
                            minLength: {
                                value: 6,
                                message: "Minimum of 6 characters"
                            }
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                    <button type="submit" >Login</button>
                </form>
            </div>
            <div className="ou">
                <div className="liner"></div>
                <span className="ou-text">OU</span>
                <div className="liner"></div>
            </div>
            <div className="container-signup">
                <span className="text" >Não tem uma conta?
                    <a href="/signup">
                        Cadastra-se
                    </a>
                </span>
            </div>
        </div>)
}

export default SignIn