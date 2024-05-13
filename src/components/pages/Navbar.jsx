import LspuLogo1 from '../logo/LSPUlogo.png'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";import { BsFillTelephoneFill } from "react-icons/bs";

import { IoMdAlert } from "react-icons/io";const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="main-container">
            <div className='navbar-links'>
                    <div className="left">
                        <img src={LspuLogo1} />
                        <h1>BUSINESS AFFAIRS OFFICE</h1>
                    </div>
                    <div className="right">
                        <ul>
                            <Link to='/'><li className='layer1'><span>HOME</span></li></Link>
                            <Link to='/'><li className='layer2'><span>ABOUT</span></li></Link>
                            <Link to='/'><li className='layer3'><span>CONTACTS</span></li></Link>
                            <Link to='/'><li className='layer4'><span>BASKET</span></li></Link>
                        </ul>
                        {/* Responsive phone navbar */}
                        <div className='nav-phone'>
                            <header>
                                <button
                                    type="button"
                                    className="sidebar-burger"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className="icon">{isOpen ? <IoClose /> : <IoMenu />}</span>
                                </button>
                            </header>
                        </div>
                    </div>
                </div>
                {/* Responsive phone navbar */}
                <div className='nav-phone'>
                    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                        <div className="inner">
                            <header>
                                <button
                                    type="button"
                                    className="sidebar-burger"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <span className="icon">{isOpen ? <IoClose /> : <IoMenu />}</span>
                                </button>
                            </header>
                            <nav className={isOpen ? "" : "notxt"}>
                                <button className='layer1'><IoMdHome /><span>HOME</span></button>
                                <button className="layer2"><IoMdAlert/> <span>ABOUT</span></button>
                                <button className='layer3'><BsFillTelephoneFill/> <span>CONTACTS</span></button>
                                <button className='layer4'><FaShoppingBasket/><span>BASKET</span></button>
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Navbar
