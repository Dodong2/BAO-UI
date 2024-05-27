import Navbar from './Navbar'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LspuLogo1 from '../logo/LSPUlogo.png'
import Contact from './Contact'
import { Link } from 'react-router-dom'
import Load from './Loading'
import 'swiper/css/scrollbar';
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
  //Aos
  useEffect(() => {
    AOS.init({
    })
  }, [])

  //for top page view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Load />
      <Navbar />
      <div className="main-container">
        {/*-----Home container-----*/}
        <div className='home-container'>
          <div className='swiper-container' data-aos="flip-left" data-aos-duration="1000">
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
              <SwiperSlide>
                <div className='element2'>
                  <h1>Introduction</h1>
                  <p>Welcome to Business Affairs Office, your one-stop for all college
                    supplies. We've got a diverse range of high-quality materials
                    tailored for your success. Whether you're a first-year or returning
                    student, we've got you covered from ID laces to books, uniforms to
                    pens. Simplify your shopping experience with us, so you can focus
                    on your goals. Make your college experience a breeze - purchase
                    now and tackle the semester with confidence!
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe3-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Home Page</h1>
                  <p>Home Page-At the BAO webpage,
                    college students have a plethora of
                    options to explore! Whether you're
                    seeking information on BAO policies,
                    browsing supplies, checking out
                    merchandise, exploring services, or
                    discovering other products, it's all just a
                    click away. On our home page, you'll
                    find a range of buttons inviting you to
                    delve into each category. From
                    academic policies to campus essentials
                    and beyond, simply click to uncover
                    what's inside and make the most out of
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe4-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>BAO About page</h1>
                  <p>this page offers
                    detailed insights about our function,
                    policies, responsibilities, and the
                    different roles our team members
                    perform. This enables visitors to have
                    a clear understanding of our
                    operations and expectations, leading
                    to a seamless and stress-free
                    shopping experience. We are
                    committed to providing exceptional
                    service and support to alleviate any
                    academic journey-related stress and
                    make it as convenient and enjoyable
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe5-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Supply Page</h1>
                  <p>The supplies
                    page contains everything you'll
                    need for college success in one
                    handy location! We provide
                    everything you need for writing,
                    including pens, pencils, and
                    markers, as well as organizational
                    tools like folders, envelopes, and
                    index cards. Prepare for
                    presentations and projects with
                    our variety of papers, boards, and
                    tapes. Don't overlook the small
                    details that make a significant
                    difference, such as scissors, rulers,
                    and sticky notes. Get everything
                    you need to have a great
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe6-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Merchandise Page</h1>
                  <p>Explore
                    our products page, where you may
                    find everything you need to display
                    your college pride and identity.
                    Essential goods include school
                    uniforms, department shirts, IDs, ID
                    laces, and course books. Dress in
                    style with our school uniforms and
                    department shirts to proudly display
                    your college connection. Make
                    yourself easily visible on campus
                    with our IDs and ID laces, and don't
                    forget to bring your course books to
                    remain ahead in your studies. Shop
                    now and express your college
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe7-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Others Page</h1>
                  <p>BAO offers more than
                    simply the essentials! Explore our
                    varied assortment of items, which are
                    sure to pique the attention of every
                    learner. Fuel your body with nutritious
                    options such as tilangit, a highprotein food, and remain hydrated
                    with our refreshing water bottles,
                    which are ideal for beating the heat.
                    Indulge your taste buds with our tasty
                    snacks, such as banana cake and
                    creamy ube sweets. And for a savoury
                    twist, try our handmade kimchi,
                    which is sure to make your mouth
                    wet. Don't miss out on these
                    appealing opportunities; visit BAO
                    and enrich your college experience!
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe8-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Cart Page</h1>
                  <p>Welcome to your shopping
                    cart, the hub where your chosen things
                    from our school store await your final
                    selection. You can evaluate each product
                    before proceeding to checkout, ensuring
                    that everything is exactly what you need.
                    Need to change the quantity or delete
                    items? No issue - our cart page allows for
                    simple alterations, giving you complete
                    control over your purchase. Take your time
                    to confirm your decisions and make any
                    required changes. Your pleasure is our top
                    priority, and our user-friendly cart interface
                    is intended to make your buying
                    experience easy and stress-free. Happy
                    shopping!
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe9-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>Receipt Page</h1>
                  <p>At the receipt
                    page you'll see the summary of
                    your orders from our school store.
                    It show the item you've chosen,
                    quantities and the total price of all
                    the item you pick.This receipt
                    serves as your official record of
                    transaction that you have to show
                    when you go to our physical store
                    to collect the item you selected in
                    our online store.Thank you for
                    shopping with us!
                  </p>
                </div>
              </SwiperSlide>
              {/*-----Swipe10-----*/}
              <SwiperSlide>
                <div className='element2'>
                  <h1>End Page</h1>
                  <p>This page show
                    the last step for
                    getting the
                    products you
                    picked
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div><br />
          {/*-----Services-----*/}
          <div className='services'>
            {/*-----Service 1-----*/}
            <div className='serv1' data-aos="fade-right" data-aos-duration="3000">
              <div className='content'>
                <h1>SCHOOL & OFFICE SUPPLIES</h1>
              </div><br />
              <div className='content'>
                <Link to="/Supply">
                  <button>GO TO SUPPLIES &gt; </button>
                </Link>
              </div>
            </div><br />
            {/*-----Service 2-----*/}
            <div className='serv2' data-aos="fade-right" data-aos-duration="3500">
              <div className='content'>
                <h1>OFFICIAL UNIVERSITY MERCHENDISE</h1>
              </div><br />
              <div className='content'>
                <Link to="/Merchandise">
                  <button>GO TO MERCHENDISES &gt; </button>
                </Link>
              </div></div><br />
            {/*-----Service 3-----*/}
            <div className='serv3' data-aos="fade-right" data-aos-duration="1500">
              <div className='content'>
                <h1>SERVICES</h1>
              </div>
              <div className='content'>
                <Link to="/About">
                  <button>GO TO SERVICES &gt; </button>
                </Link>
              </div>
            </div><br />
            {/*-----Service 4-----*/}
            <div className='serv4' data-aos="fade-right" data-aos-duration="1500">
              <div className='content'>
                <h1>OTHER PRODUCTS</h1>
              </div><br />
              <div className='content'>
                <Link to="/Other">
                  <button>GO TO OTHERS &gt; </button>
                </Link>
              </div>
            </div><br />
          </div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default Home
