/* eslint-disable react/jsx-no-undef */
import Navbar from './Navbar'
import { FaSearch } from "react-icons/fa";
import SuppProduct from './SuppProduct'
const Supply = () => {
  return (
    <>
    <Navbar/>
    <div className="main-container">
    {/*-----Supplies container-----*/}
    <div className='supply-container'>
    {/*-----Supplies content1-----*/}
    <div className='supply-content1'>
    <input type='text' id='search' placeholder='search item'/>
    <div className='icon4'><FaSearch/></div>
    </div>
    <div className='supply-content2'>
    <SuppProduct/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Supply
