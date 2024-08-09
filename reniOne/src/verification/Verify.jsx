import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Imported Images
import logo from '../assets/logo.png'
import backgroundImg from '../assets/bgimage.png'

const Verify = () => {

  const [otp, setOtp] = useState(new Array(6).fill(""))


  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false

    const updatedOtp = [...otp]
    updatedOtp[index] = e.target.value

    setOtp(updatedOtp)

    if (e.target.value && index < 5) {
      e.target.nextSibling.focus()
    } else if (!e.target.value && index > 0) {
      e.target.previousSibling.focus()
    }
  }

  function handleBackspace(e, index) {
    if (e.key === 'Backspace' && !e.target.value) {
      const updatedOtp = [...otp]
      updatedOtp[index] = ''
      setOtp(updatedOtp)

      if (index > 0) {
        e.target.previousSibling.focus()
      }
    }
  }
  return (
    <div className='mainContainer'>
      <div className="imgContainer">
        <img src={backgroundImg} className='imgDiv' />
      </div>

      <div className="verifySection">
        <div className="formSect">
          <div className="header">
            <div className="logoDiv">
              <img src={logo} className='Logo' />
              <p className='graph'>RENI.One</p>
            </div>
            <h1 className='headingsection'>Sign Up</h1>

          </div>

          <div className="formSection">
            <form>
              <div className="formDiv">
                <p className="email">Enter your email address, you 'll be sent an OTP to verify you email.</p>

                <div className='formContainer'>
                  <label>
                    Email
                  </label>
                  <input type="email" placeholder='example@example.com' />
                </div>

              </div>
              <div className="btn">
                <button className='newbtn'>Start Verification</button>
              </div>

              <div className="otp">
                <p className="boxs">
                  OTP
                </p>
                <div className="otpArea">
                  {
                    otp.map((data, i) => {
                      return <input type="otp" value={data}
                        maxLength={1}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleBackspace(e, i)}
                      />
                    })
                  }
                </div>
              </div>

              <div className="buts">
                <Link to="/sign-up">
                  <button className="btns">Complete Verfication</button>
                </Link>

              </div>

              <div className="para">
              <p >Already have an account? 
                <Link to="/log-in">
                <span>Login</span>
                </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Verify