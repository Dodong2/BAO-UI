import Navbar from "./Navbar"
import LspuLogo1 from '../logo/LSPUlogo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const EndPage = () => {
  return (
    <>
    <Navbar/>
    <div className="main-container">
    {/*-----End Page container-----*/}
    <div className="end-container">
    <div className="end-element">
    <img src={LspuLogo1}/>
    <h1>Proceed to BAO Building to finish the transaction<br/><span>Thank you and Godbless</span></h1>
    </div>
    </div>
    {/*-----Cart footer-----*/}
    <div className="cart-footer">
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

export default EndPage
