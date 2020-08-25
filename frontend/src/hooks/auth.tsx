import React, { useCallback, createContext, useContext } from 'react'
import gql from 'graphql-tag'

import api from '../service/graphql'

interface ISingInCredentials {
    email: string
    password: string
}

interface ISingUpCredentials {
    name: string
    email: string
    password: string
}

interface IAuthContextData {
    signIn(credentials: ISingInCredentials): void
    signUp(singUpCredentials: ISingUpCredentials): void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(({ email, password }: ISingInCredentials) => {
        api.query({
            query: gql`
                query( $email: String! $password: String! ) {
                    signin(data: { email: $email password: $password }) {
                        valid token
                    }
                }`,
            variables: { email, password }
        }).then(response => {
            const { token, valid } = response.data.signin
            if (valid) {
                localStorage.setItem("@instaclone-token", token)
            } else {
                throw new Error("Error in sign in")
            }
        })
    }, [])

    const signUp = useCallback(({ email, name, password }: ISingUpCredentials) => {
        api.mutate({
            mutation: gql`
                mutation( $name: String! $email: String! $password: String! ) {
                    signup(data: { name: $name email: $email password: $password }) {
                        token
                    }
                }`,
            variables: {
                email, name, password
            }
        }).then(response => {
            console.log(response.data.signup)
            let { token } = response.data.signup
            if (token.trim()) {
                localStorage.setItem("@instaclone-token", token)
            } else {
                throw new Error("Error in sign up")
            }
        })
    }, [])


    return (
        <AuthContext.Provider value={{ signIn, signUp }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): IAuthContextData {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }

    return context
}