import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LspuLogo1 from '../logo/LSPUlogo.png'
import Contact from './Contact'
import { Link } from 'react-router-dom'




import 'swiper/css/scrollbar'; const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/*-----Home container-----*/}
        <div className='home-container'>
          <div className='swiper-container'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {/*-----Swipe1-----*/}
              <SwiperSlide>
                <div className='element1'>
                  <div><img src={LspuLogo1} /></div>
                  <div className='txt1'>
                    <h1>BUSINESS AFFAIRS OFFICE</h1>
                    <p>Laguna State Polytechnic University - Los Baños Campus</p>
                  </div>
                </div>
              </SwiperSlide>
              {/*-----Swipe2-----*/}
              <SwiperSlide>Slide 2</SwiperSlide>
              {/*-----Swipe3-----*/}
              <SwiperSlide>Slide 3</SwiperSlide>
              {/*-----Swipe4-----*/}
              <SwiperSlide>Slide 4</SwiperSlide>
              {/*-----Swipe5-----*/}
              <SwiperSlide>Slide 5</SwiperSlide>
              {/*-----Swipe6-----*/}
              <SwiperSlide>Slide 6</SwiperSlide>
              {/*-----Swipe7-----*/}
              <SwiperSlide>Slide 7</SwiperSlide>
              {/*-----Swipe8-----*/}
              <SwiperSlide>Slide 8</SwiperSlide>
              {/*-----Swipe9-----*/}
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div><br />
          {/*-----Services-----*/}
          <div className='services'>
          {/*-----Service 1-----*/}
            <div className='serv1'>
              <div className='content'>
                <h1>SCHOOL & OFFICE SUPPLIES</h1>
              </div><br />
              <div className='content'>
              <Link to="/Supply">
                <button>GO TO SUPPLIES &gt; </button>
                </Link>
              </div>
            </div><br/><br/>
            {/*-----Service 2-----*/}
            <div className='serv2'>
            <div className='content'>
                <h1>OFFICIAL UNIVERSITY MERCHENDISE</h1>
              </div><br />
              <div className='content'>
              <Link to="/">
                <button>GO TO MERCHENDISES &gt; </button>
                </Link>
              </div></div><br/><br/>
              {/*-----Service 3-----*/}
            <div className='serv3'>
            <div className='content'>
                <h1>SERVICES</h1>
              </div><br />
              <div className='content'>
              <Link to="/About">
                <button>GO TO SERVICES &gt; </button>
                </Link>
              </div>
            </div><br/><br/>
            {/*-----Service 4-----*/}
            <div className='serv4'>
            <div className='content'>
                <h1>OTHER PRODUCTS</h1>
              </div><br />
              <div className='content'>
              <Link to="/Other">
                <button>GO TO OTHERS &gt; </button>
                </Link>
              </div>
            </div><br/><br/>
          </div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default Home
