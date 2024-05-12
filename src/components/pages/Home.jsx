import LspuLogo1 from '../logo/LSPUlogo.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <div className="main-container">
                <nav>
                    <div className="left">
                        <img src={LspuLogo1} />
                        <h1>BUSINESS AFFAIRS OFFICE</h1>
                    </div>
                    <div className="right">
                        <ul>
                        <Link to='/'><li><span>Home</span></li></Link>
                        <Link to='/'><li><span>ABOUT</span></li></Link>
                        <Link to='/'><li><span>CONTACTS</span></li></Link>
                        <Link to='/'><li><span>BASKET</span></li></Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Home
