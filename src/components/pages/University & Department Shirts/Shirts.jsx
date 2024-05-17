// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';



// import required modules
import { EffectCreative } from 'swiper/modules';
const Shirts = () => {
  return (
    <>
    <div className='tshirt-products'>
    <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[EffectCreative]}
    className="mySwiper"
  >
    <SwiperSlide>
        <div className='tshirt1'>
        <h3>University Shirt</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide><div className='tshirt2'>
    <h3>Department Shirt</h3>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className='tshirt3'>
    <h3>NSTP Shirt</h3>
        </div>
    </SwiperSlide>
  </Swiper>
  </div>
    </>
  )
}

export default Shirts
