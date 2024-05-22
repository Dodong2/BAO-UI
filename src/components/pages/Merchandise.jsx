import Navbar from './Navbar'
import { useEffect } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import { MdSwipe } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import Contact from './Contact';
import BooksPro from './BookItems/BooksProducts'
import Shirts from './University & Department Shirts/Shirts'
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
        {/*-----Merchandise container-----*/}
        <div className='merchandise-container'>
          {/*-----Merch content1-----*/}
          <div className='merch-content1' data-aos="flip-left"  data-aos-duration="3000">
            <h2>University & Department Shirts</h2>
            <Shirts />
            <div className='icon6'><MdSwipe /> <span>Swipe to see other</span></div>
            <div className='merch-btn'>
              <button className='merch-btn1' data-aos="fade-up" data-aos-duration="3000"><FaRegCheckCircle className='icon7' /> pick size</button>
              <button className='merch-btn2' data-aos="fade-right" data-aos-duration="2000">ADD TO BASKET</button>
            </div>
          </div>
          {/*-----Merch content1-----*/}

          <div className='merch-content2'>
            <h2>ID Lanyards</h2>
            <div className='id-bg'></div>
            <div className='merch-btn'>
              <button className='merch-btn1' data-aos="fade-right" data-aos-duration="2000"><FaRegCheckCircle className='icon7' /> pick department</button>
              <button className='merch-btn2' data-aos="fade-up" data-aos-duration="2000">ADD TO BASKET</button>
            </div>
          </div>
          {/*-----Books Product 3-----*/}
          <h2>Course Books</h2>
          <div className='merch-content3'>
            <BooksPro />
          </div>
        </div>
        <div className='basket-container'>
          <div className='basket-content'>
            <div className='icon5'><FaShoppingBasket /></div>
            <div>
              <h1><span>ADD TO</span><br /><span>BASKET</span></h1>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default Supply
