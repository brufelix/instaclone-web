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
    signIn(signInCredentials: ISingInCredentials): Promise<boolean>
    signUp(signUpCredentials: ISingUpCredentials): Promise<boolean>
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(async ({ email, password }: ISingInCredentials) => {
        return await api.query({
            query: gql`
                query( $email: String! $password: String! ) {
                    signin(data: { email: $email password: $password }) {
                        valid token
                    }
                }`,
            variables: { email, password }
        }).then(response => {
            const { token, valid } = response.data.signin
            if (token.trim()) localStorage.setItem("@instaclone:token", token);
            return valid
        })
    }, [])

    const signUp = useCallback(async ({ email, name, password }: ISingUpCredentials) => {
        return await api.mutate({
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
            let { token } = response.data.signup
            if (token.trim()) {
                localStorage.setItem("@instaclone:token", token)
                return true
            }
            return false
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