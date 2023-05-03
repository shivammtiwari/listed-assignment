import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = () => {
    return (
        <div className='loginPageContainer'>
            <div className='loginPageLeft'>
                <h1>Board.</h1>
            </div>
            <div className='loginPageRight'>
                <Login />
            </div>
        </div>
    )
}

export default LoginPage