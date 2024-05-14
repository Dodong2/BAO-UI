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
                            <Link to='/'><li className='layer1 custom-hover'><span>HOME</span></li></Link>
                            <Link to='/About'><li className='layer2 custom-hover'><span>ABOUT</span></li></Link>
                            <Link to='/'><li className='layer3 custom-hover'><span>CONTACTS</span></li></Link>
                            <Link to='/'><li className='layer4 custom-hover'><span>BASKET</span></li></Link>
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
                                <Link to="" className='layer1'><button><IoMdHome /><span>HOME</span></button><hr/></Link>
                                <Link to="/" className='layer2'><button ><IoMdAlert/> <span>ABOUT</span></button></Link><hr/>
                                <Link to="/" className='layer3'><button><BsFillTelephoneFill/> <span>CONTACTS</span></button></Link><hr/>
                                <Link to="/" className='layer4'><button><FaShoppingBasket/><span>BASKET</span></button></Link>
                            </nav>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Navbar
