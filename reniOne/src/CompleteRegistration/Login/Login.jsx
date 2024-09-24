import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

// imported images
import logo from '../../assets/logo.png'
import image from '../../assets/bgimage.png'

const Login = () => {
  return (
    <div className='loginSection'>

      <div className="imgContainer">
        <img src={image} className='Image' />
      </div>

      <div className="loginForm">

        <div className="loginHeader">

          <div className="reni-Logo">
            <img src={logo} className='Logo' />
            <p className='graph'>RENI.One</p>
          </div>

          <h1 className='welcome'>Welcome Back</h1>
        </div>

        <div className="loginContainer">
          <form>

            <div className='formContainer'>
              <label>
                Email
              </label>
              <input type="email" placeholder='example@example.com' />
            </div>

            <div className='inps-box'>
              <label>
                Password
              </label>
              <input type="password" placeholder='***********' />
            </div>

            <Link to="/forgot">
              <span className='spans'>Forgot Password?</span>
            </Link>



            <div className="button-Container">

              <Link to="/dash">
                <button>Login</button>
              </Link>
            </div>

            <div className="para">
              <p >Already have an account?
                <Link to="/">
                  <span>Signup</span>
                </Link>
              </p>
            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Login