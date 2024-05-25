import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import testImage from '/supp1.png'
import Load from './Loading'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Cart = () => {
    //Aos
    useEffect(() => {
      AOS.init( {
        duration: 1200
    })
    }, [])
  //for top page view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <Load />
      <Navbar />
      <div className="main-container">
        {/*-----Cart container-----*/}
        <div className='cart-container'>
          <div className='items-selection' data-aos="fade-up" data-aos-duration="2300">
            <div className='items-selection1'>
              <div className='act1'><input type='checkbox' id="act1" /></div>
              <div className='act2'><img src={testImage} /></div>
              <div className='act3'><h1>Sticky Note's</h1></div>
            </div>
            <div className='items-selection2'>
              <div className='act4'><h2>P 15.00</h2></div>
              <div className='act5'>
                <button onClick={DecrementCount}><RiSubtractFill /></button>
                <div><input type='text' value={count} readOnly /></div>
                <button onClick={IncrementValue}><IoMdAdd /></button>
              </div>
              <div className='act6'>
                <button><FaTrashAlt /></button>
              </div>
            </div>
          </div>
          <div className='items-selection3' data-aos="fade-right" data-aos-duration="1600">
            <div className='selection3'>
              <h1>Total: <span>P 510.00</span></h1>
              <Link to='/Receipt'>
                <button>Check out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
