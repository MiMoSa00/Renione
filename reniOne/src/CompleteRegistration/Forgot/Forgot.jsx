import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Forgot/Forgot.css'

// Imported Images
import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/bgimage.png'

const Forgot = () => {

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
    <div className='forgotContainer'>
      <div className="forgotimg">
        <img src={backgroundImg} className='forgotDiv' />
      </div>

      <div className="forgotSection">
        <div className="forgotSect">
          <div className="header">
            <div className="forgotlogoDiv">
              <img src={logo} className='Logo' />
              <p className='Graph'>RENI.One</p>
            </div>
            <h1 className='heading-section'>Forgot Password</h1>

          </div>

          <div className="ForgotFormSection">
            <form>
              <div className="formDiv">
                <p className="email">Enter the OTP sent to your email address to continue the password reset</p>

                <div className='ForgotContainer'>
                  <label>
                    Email
                  </label>
                  <input type="email" placeholder='example@example.com' />
                </div>

              </div>


              <div className="Forgototp">
                <p className="Forgotboxs">
                  OTP
                </p>
                <div className="otpForgot">
                  {otp.map((data, i) => (
                    <input
                      key={i}
                      type="otp"
                      value={data}
                      maxLength={1}
                      onChange={(e) => handleChange(e, i)}
                      onKeyDown={(e) => handleBackspace(e, i)}
                    />
                  ))}

                </div>
              </div>

              <div className="next">
                <Link to="/forgot/new">
                  <button className='nextt'>Next</button>
                </Link>

              </div>


            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Forgot