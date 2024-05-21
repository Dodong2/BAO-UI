import { useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import testImage from '../image/supp1.png'
const Cart = () => {
    const [count, setcount] = useState(0);
      //add value
  const IncrementValue = () => {
    setcount((count) => count + 1)
  }
  //minos value
  const DecrementCount = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  return (
    <>
      <Navbar/>
      <div className="main-container">
      {/*-----Home container-----*/}
      <div className='cart-container'>
      <div className='items-selection'>
      <div className='items-selection1'>
      <div className='act1'><input type='checkbox' id="act1"/></div>
      <div className='act2'><img src={testImage}/></div>
      <div className='act3'><h1>Sticky Note's</h1></div>
      </div>
      <div className='items-selection2'>
      <div className='act4'><h2>P 15.00</h2></div>
      <div className='act5'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div><input type='text' value={count} readOnly/></div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          <div className='act6'>
          <button><FaTrashAlt/></button>
          </div>
      </div>
      </div>
      <div className='items-selection3'>
      <div className='selection3'>
      <h1>Total: <span>P 510.00</span></h1>
      <Link rel='/'>
      <button>Check out</button>
      </Link>
      </div>
      </div>
      </div>
      {/*-----Login footer-----*/}
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

export default Cart
