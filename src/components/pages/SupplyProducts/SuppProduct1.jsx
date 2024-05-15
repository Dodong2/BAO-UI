import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import SuppProd1 from '/src/components/image/supp1.png'
import SuppProd2 from '/src/components/image/supp2.png'
import SuppProd3 from '/src/components/image/supp3.png'


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
      
        {/*-----Product 1-----*/}
        
          <div className='supp-card'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={SuppProd1} className='img2' />
              <h1>Sticky Notes <br /><span>(Per Pad)</span><br /><span>P 15.00</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        
        {/*-----Product 2-----*/}
        
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd2} className='img2' />
            <h1>Thumb tacks <br /><span>(Per Piece)</span><br /><span>P 30.00</span></h1>
          </div><br />
          <div className='card-stocks'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div>{count}</div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
          </div>
        </div>
        {/*-----Product 3-----*/}
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd3} className='img2' />
            <h1>Push pins <br /><span>(Per box)</span><br /><span>P 45.00</span></h1>
          </div><br />
          <div className='card-stocks'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div>{count}</div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
          </div>
        </div>
        <div>
        </div>

    </>
  );
}