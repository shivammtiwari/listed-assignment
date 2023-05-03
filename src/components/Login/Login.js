import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

const Login = () => {
    // const navigate = useNavigate();
    return (
        <div className='loginContainer'>
            <h2>Sign In</h2>
            <p>sign in  to your account</p>
            <div className='socialLogin'>
                <button className='socialLoginButton'>
                    <FcGoogle /> sign in with google
                </button>
                <button className='socialLoginButton'>
                    <FaApple className='AppleICon' /> sign in with apple
                </button>
            </div>
            <form action="home" className='loginForm'>
                <label htmlFor="">Email address</label> <br />
                <input type='email' placeholder='enter your email' required ></input><br />
                <label htmlFor="">password</label> <br />
                <input type='password' placeholder='enter your password' required></input>
                <button >Sign In</button>
            </form>
            <p className='registerHere'>Don't have an account? <Link to='/'>Register here</Link></p>
        </div>
    )
}

export default Login