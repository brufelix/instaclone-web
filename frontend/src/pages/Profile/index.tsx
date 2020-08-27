import React from 'react'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

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
            <div>
                <button style={{ marginTop: "200px" }}
                    onClick={handleSignOut} >Sign out</button>
                <h1 style={{ marginTop: "200px" }}>Profile</h1>
            </div>
        </>
    )
}

export default Profile