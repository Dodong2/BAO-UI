import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '../logo/LSPUlogo.png'
import SuppProd1 from '../image/supp1.png'


export default function App() {
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
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {/*-----Product 1-----*/}
        <SwiperSlide>
        <div className='supp-card'>
        <div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div>
        </div>
        </SwiperSlide>
        {/*-----Product 2-----*/}
        <SwiperSlide><div className='supp-card'>
        <div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div>
        </div></SwiperSlide>
        {/*-----Product 3-----*/}
        <SwiperSlide><div className='supp-card'>
        <div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div>
        </div></SwiperSlide>
        {/*-----Product 4-----*/}
        <SwiperSlide><div className='supp-card'><div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div></div></SwiperSlide>
        {/*-----Product 5-----*/}
        <SwiperSlide><div className='supp-card'><div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div></div></SwiperSlide>
        {/*-----Product 6-----*/}
        <SwiperSlide><div className='supp-card'><div className='card-contents'>
        <img src={LspuLogo1} className='img1'/>
        <img src={SuppProd1} className='img2'/>
        <h1>Sticky Notes <br/><span>(Per Pad)</span><br/><span>P 15.00</span></h1>
        </div><br/>
        <div className='card-stocks'>
        <button onClick={DecrementCount}><RiSubtractFill/></button>
        <div>{count}</div>
        <button onClick={IncrementValue}><IoMdAdd/></button>
        </div></div></SwiperSlide>
      </Swiper>
    </>
  );
}