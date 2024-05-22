import Navbar from './Navbar'
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import SuppProduct1 from './SupplyProducts/SuppProduct1'
import SuppProduct2 from '../pages/SupplyProducts/SuppProduct2'
import SuppProduct3 from '../pages/SupplyProducts/SuppProduct3'
import SuppProduct4 from '../pages/SupplyProducts/SuppProduct4'
import SuppProduct5 from '../pages/SupplyProducts/SuppProduct5'
import SuppProduct6 from '../pages/SupplyProducts/SuppProduct6'
import SuppProduct7 from '../pages/SupplyProducts/SuppProduct7'
import Contact from './Contact';
import Load from './Loading'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Supply = () => {
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

  return (
    <>
    <Load/>
      <Navbar />
      <div className="main-container">
        {/*-----Supplies container-----*/}
        <div className='supply-container'>
          {/*-----Supplies content1-----*/}
          <div className='supply-content1'>
            <input type='text' id='search' placeholder='search item' />
            <div className='icon4'><FaSearch /></div>
          </div>
          <div className='supply-content2' data-aos="fade-up-right" data-aos-duration="3000">
            <SuppProduct1 />
          </div>
          {/*-----Product 2-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct2 />
          </div>
          {/*-----Product 3-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct3 />
          </div>
          {/*-----Product 4-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct4 />
          </div>
          {/*-----Product 5-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct5 />
          </div>
          {/*-----Product 6-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct6 />
          </div>
          {/*-----Product 7-----*/}
          <div className='supply-content2' data-aos="fade-up-right">
            <SuppProduct7 />
          </div>
        </div>
        <div className='basket-container' data-aos="fade-up">
          <div className='basket-content'>
            <div className='icon5'><FaShoppingBasket /></div>
            <div>
              <h1><span>ADD TO</span><br /><span>BASKET</span></h1>
            </div>
          </div>
        </div>
        <Contact data-aos="fade-up"/>
      </div>
    </>
  )
}

export default Supply
