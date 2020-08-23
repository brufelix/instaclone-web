import React, { useCallback, createContext, useContext } from 'react'
import gql from 'graphql-tag'

import api from '../service/graphql'

interface IUser {
    user: string
    email: string
    password: string 
}

interface IAuthState {
    token: string
    user: IUser
}

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

    const signIn = useCallback(({ email, password }: ISingInCredentials ) => {
        api.query({
            query: gql`
                query( $email: String! $password: String! ) {
                    signin(data: { email: $email password: $password }) {
                        token
                    }
                }`,
            variables: {email, password}
        }).then(response => {
            console.log(response)
        })
    }, [])

    const signUp = useCallback(({ email, name, password }: ISingUpCredentials) => {
        api.mutate({
            mutation: gql`
                mutation( $name: String $email: String! $password: String! ) {
                    signup(data: { name: $name email: $email password: $password }) {
                        token
                    }
                }`,
            variables: {
                email, name, password
            }
        }).then(response => {
            console.log(response)
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