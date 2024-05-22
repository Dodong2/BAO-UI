import Navbar from "./Navbar"
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useRef, useEffect } from 'react';
//for Screenshot funtion
import html2canvas from "html2canvas";
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const Receipt = () => {
    //for Screenshot funtion
    const screenshotTargetRef = useRef(null)
    const handleScreenshot = () => {
        const element = screenshotTargetRef.current

        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('img/png')
            const link = document.createElement('a')
            link.href = imgData
            link.download = 'screenshot.png'
            link.click()
        })
    }
    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200
        })
    }, [])
    //for top page view
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="main-container">
                {/*-----Receipt container-----*/}
                <div className="receipt-container" ref={screenshotTargetRef}>
                    <div className='receipt1' data-aos="fade-up-right" data-aos-duration="2000">
                        <div><h1>Name: </h1>
                            <input type="text" name="input1" id="inputs1" />
                        </div><hr />
                        <div><h1>Email: </h1>
                            <input type="text" name="input1" id="inputs2" />
                        </div><hr />
                        <div><h1>Phone number: </h1>
                            <input type='text' name="input1" id="inputs3" />
                        </div><hr />
                        <div><h1>Receipt #: </h1>
                            <input type='text' name="input1" id="inputs4" />
                        </div><hr />
                        <div><h1>Time: </h1>
                            <input type='text' name="input1" id="inputs5" />
                        </div><hr />
                        <div><h1>Date: </h1>
                            <input type='text' name="input1" id="inputs6" />
                        </div><hr />
                    </div>
                    <div className='receipt2' data-aos="fade-up-right" data-aos-duration="2800">
                        <div className="receipt-title"><h1>LSPU-LB CAMPUS</h1></div><br />
                        <div className="receipt-table">
                            <h1>Order Items</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Item</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2>Total: </h2>
                        </div>
                    </div>
                </div>
                <div className="receipt-action">
                    <button onClick={handleScreenshot} data-aos="fade-right">Save</button>
                    <Link to='/EndPage'>
                        <button data-aos="fade-right">Done</button>
                    </Link>
                </div>
                <section id='contacts'>
                {/*-----Cart footer-----*/}
                <div className="cart-footer">
                    <footer>
                        <div className="loc">
                            <FaLocationDot className="icons" />
                            <h1>Find Us at: 56PJ+PP9, Los Baños, 4030 Laguna</h1>
                        </div>

                        <div className="cont">
                            <FaPhoneAlt className="icons" />
                            <h1>Contact Us: 0999-993-7400</h1>
                        </div>

                        <div className="soc">
                            <h1>Socials:</h1>
                            <a href="https://web.facebook.com/groups/414182603901608/"><FaFacebook className="icons" /></a>
                            <TbMailFilled className="icons" />
                        </div>

                    </footer>
                </div>
                </section>
            </div>
        </>
    )
}

export default Receipt
