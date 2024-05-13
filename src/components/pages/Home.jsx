import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LspuLogo1 from '../logo/LSPUlogo.png'


import 'swiper/css/scrollbar';const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="main-container">
        {/*-----Home container-----*/}
        <div className='home-container'>
        <div className='swiper-container'>
            <Swiper
            slidesPerView={1}
            spaceBetween={50}
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
            <div><img src={LspuLogo1}/></div>
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
          </div>
          </div>
          {/*-----Home Footer-----*/}
          <div className='home-footer'>
          <div className='footer-layer1'>
          <h1>FIND US</h1>
          <p> Laguna State Polytechnic University - Los Baños Campus (56PJ + PP9, Los Baños, 4030 Laguna)</p><br/>
          <h1>CONTACT US</h1>
          </div>

          <div className='footer-layer2'>
          <div>
          <h1>Cristopher F. Mendoza</h1>
          <p>cristopher.mendoza@lspu.edu.ph</p>
          <p>0999-993-7400</p>
          </div>
          <div>
          <h1>Princess Joyce Yadao</h1>
          <p>etacioprincess33@gmail.com</p>
          <p>0910-776-4986</p>
          </div>
          </div>
          </div>
          </div>
        </>
    )
}

export default Home
