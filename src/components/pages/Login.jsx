/* eslint-disable react-hooks/rules-of-hooks */
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import LspuLogo1 from '../logo/LSPUlogo.png'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Load from './Loading'
//AOS
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const login = () => {
//    //Aos
//    useEffect(() => {
//     AOS.init({
//         duration: 1200
//     })
// }, [])

  const [showpass, setshowpass] = useState(false)
  const [changeicon, setchangeicon] = useState(true)
  const tgglePass = () => {
    setshowpass(!showpass)
  }
  const tggleicons = () => {
    setchangeicon(!changeicon)
  }

  return (
    <>
    <Load/>
      <div className="main-container">
        {/*-----Login page-----*/}
        <div className="login-container">
          <form action="" method="">
            {/*-----Login input 1 -----*/}
            <div className="input1">
              <img src={LspuLogo1} />
              <FaUser className="icon1" />
              <h1>Enter Student Number</h1>
              <input type="text" id="student" required />
            </div><br />
            {/*----- Login input 2 -----*/}
            <div className="input2">
              <IoIosLock className="icon2" />
              <h1>Enter Password</h1>
              <div className="password-container">
                <input type={showpass ? 'text' : 'password'} id="password" required />
                <div className='icon3' onClick={tggleicons}>{changeicon ? (<FaEye onClick={tgglePass} />) : (<FaEyeSlash onClick={tgglePass} />)}</div>
              </div>
            </div>
            <Link to='/Home'>
              <button >Login</button>
            </Link>
          </form>
        </div>
        {/*-----Login footer-----*/}
        <div className="footer-login">
          <footer>

            <div className="loc">
              <FaLocationDot className="icons" />
              <h1>Find Us at: 56PJ+PP9, Los Baños, 4030 Laguna</h1>
            </div>

            <div className="cont">
              <FaPhoneAlt className="icons" />
              <h1>Contact Us: 0999-993-7400</h1>
            </div>

            <div className="soc">
              <h1>Socials:</h1>
              <a href="https://web.facebook.com/groups/414182603901608/"><FaFacebook className="icons" /></a>
              <TbMailFilled className="icons" />
            </div>

          </footer>
        </div>
      </div>
    </>
  )
}

export default login
