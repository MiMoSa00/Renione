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
      <div className='verifySection'>
        <div className="logoDiv">
          <img src={logo} className='logo' />
        </div>
        <div className="headingSection">
          <h1>RENI.One</h1>
        </div>

        <div className="formSection">
          <h2>Sign up</h2>
          <div className="formDiv">
            <div className="formContainer">
              <p className='email'>Enter your email address, you 'll be sent an OTP to verify you email.</p>
              <div className="form">
                <p className='mail'>Email</p>
                <input type="email" placeholder='example@example.com' />
              </div>

              <div className="btn">
                <button className='newbtn'>Start Verification</button>
                <p className="otp">
                  OTP
                </p>
                <div className="otpArea">
                  {
                    otp.map((data, i) => {
                      return <input type="otp" value={data}
                      maxLength={1}
                      onChange={(e) =>handleChange(e, i)}
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
              <p >Already have an account? <span>Login</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify



/* h2 {
    color: #001E88;
    margin-bottom: 2rem;
    text-align: center;
}

.formContainer {
    box-sizing: border-box;
    background-color: var(--whiteColor);

    width: 100%;
    height: 60%;
    padding-top: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 1rem;
    border-radius: 8px; */
    /* margin-left: 2rem; */
    /* margin-top: 6rem; */
    /* overflow: hidden;
    z-index: 8;
    border: 2px solid lightgrey;
    /* position: absolute; */
/* }

.formDiv {
    content: '';
    padding: 1rem;
    background: linear-gradient(to bottom, #001E88, #FEFCFC);
    margin-top: 2rem;
    border-radius: 8px;
    z-index: -1;
    margin: -5px;
}

.email {
    color: var(--greyText);
    font-size: 18px;
    margin-top: -5rem;
    font-weight: 400;
    text-align: left;
    margin-left: -6rem; */ 
    /* line-height: 3rem; */
/* }

.form {
    justify-content: left;
    margin-left: -6rem;
    font-size: 19px;
}

.mail {
    color: var(--greyText);
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    margin-top: 5rem;

}

p {
    color: var(--greyText);
    font-size: 19px;
    font-weight: 400;
    text-align: center;
}


input[type="email"] {
    width: 610px;
    padding: .9rem;
    border-radius: .7rem;
    margin-top: -9px;
    border: 2px solid lightgrey;
    outline: 2px solid lightgrey;
    margin-bottom: 4rem;
}

::placeholder {
    font-size: 18px;
    color: var(--greyText);
}

.btn {
    margin-top: -3rem;
    text-align: left;
    margin-left: -6rem;
}

.newbtn {
    background: var(--textColor);
    color: var(--whiteColor);
    width: 30%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    box-shadow: 5px 4px 4px 2px lightgrey;
    border: none;
    outline: 2px solid lightgrey;
}

.otp {
    color: var(--greyText);
    font-size: 19px;
    font-weight: 400;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    text-align: left
} */

/* .boxs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 12%;
    border: 2px solid lightgrey;
    background-color: var(--whiteColorDeam);
    margin-top: 1.6rem;
} */

/* input[type="number"]:focus {
    border: 6px solid var(--newBgColor);

} */

/* .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 30px;
    margin-left: -1rem;
}

.buts {
    margin-top: -1.8rem;
    margin-bottom: 2rem;
}

.btns {
    color: #001E88;
    border: 2px solid #001E88;
    background-color: transparent;
    padding: 1rem;
    border-radius: 8px;
    width: 500px;
    max-width: 580px;
    text-align: center;
    margin-left: -4rem;
    font-weight: 700;
    font-size: 16px;

}

span {
    color: #001E88;
    font-weight: 500;
    /* text-align: center; */
/* }
input[type="otp"]{
    font-size: 20px;
    font-weight: 600;
   width: 65px;
   height: 50px;
   padding: 10px;
   outline: 2px solid lightgrey;
   text-align: center;
}

.otpArea{
    width: 30%;
    margin: 20px ;
    display: flex;
    gap: 30px;
    margin-left: -10px;
}

.otpArea input:focus{
    border: 6px solid var(--newBgColor);
}  */


    .divTitle,
.settingsDiv .divTitle 

.listings,
.settingsDiv .menuLists


.menuLink,
.settingsDiv .menuLists .listings:hover

.settingsDiv .menuLists .listings:hover::before