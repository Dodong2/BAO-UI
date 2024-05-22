import Navbar from "./Navbar"
import { useEffect } from "react"
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
    //Aos
    useEffect(() => {
      AOS.init( {
        duration: 1200
    })
    }, [])
  return (
    <>
    <Navbar/>
    <section id="contacts" data-aos="fade-up">
      {/*-----Contact Footer-----*/}
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
      </section>
    </>
  )
}

export default Contact
