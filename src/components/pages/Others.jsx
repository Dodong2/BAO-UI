import Navbar from "./Navbar"
import { useEffect } from "react";
import Contact from './Contact'
import { FaShoppingBasket } from "react-icons/fa";
import otherProd1 from '../image/otherProd1.jpg'
import otherProd2 from '../image/otherProd2.jpg'
import otherProd3 from '../image/otherProd3.jpg'
import otherProd4 from '../image/otherProd4.jpg'
import Load from './Loading'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Others = () => {
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
    <Navbar/>
    <div className="main-container">
    {/*-----Other Page-----*/}
    <div className="other-container">
    <div className="other-header"><h1>ALSO in BAO</h1></div>
    {/*-----Other service 1-----*/}
    <div className="other-serv1">
    <div className="other-contents1">
    <img src={otherProd1}/>
    <div className="other-action1">
    <h1>Tilanggit - P100</h1>
    <button data-aos="flip-left"><FaShoppingBasket/> ADD TO BASKET</button>
    </div>
    </div>
    </div>
        {/*-----Other service 2-----*/}
        <div className="other-serv2">
        <div className="other-contents1">
        <img src={otherProd2}/>
        <div className="other-action2">
        <h1>Bottled Water - P10 (350ml), P15 (500ml)</h1>
        <button data-aos="flip-left"><FaShoppingBasket/> ADD TO BASKET</button>
        </div>
        </div>
        </div>
            {/*-----Other service 3-----*/}
    <div className="other-serv3">
    <div className="other-contents1">
    <img src={otherProd3}/>
    <div className="other-action3">
    <h1>Cream Banana Cake & Cream Ube Cake - P100</h1>
    <button data-aos="flip-left"><FaShoppingBasket/> ADD TO BASKET</button>
    </div>
    </div>
    </div>
    {/*-----Other service 4-----*/}
    <div className="other-serv4">
    <div className="other-contents1">
    <img src={otherProd4}/>
    <div className="other-action4">
    <h1>Home Made Kimchi - P100(small), P200(Big)</h1>
    <button data-aos="flip-left"><FaShoppingBasket/> ADD TO BASKET</button>
    </div>
    </div>
    </div>
    
    </div>
    <Contact/>
    </div>
    </>
  )
}

export default Others
