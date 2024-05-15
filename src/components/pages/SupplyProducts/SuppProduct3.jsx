import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import SuppProd7 from '/src/components/image/supp7.png'
import SuppProd8 from '/src/components/image/supp8.png'
import SuppProd9 from '/src/components/image/supp9.png'



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
      
        {/*-----Product 7-----*/}
        
          <div className='supp-card'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={SuppProd7} className='img2' />
              <h1>Correction Fluid <br /><span>(Per Piece)</span><br /><span>P 40.00</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        
        {/*-----Product 8-----*/}
        
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd8} className='img2' />
            <h1>Correction Tape <br /><span>(Per Piece)</span><br /><span>P 85.00</span></h1>
          </div><br />
          <div className='card-stocks'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div>{count}</div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
          </div>
        </div>
        {/*-----Product 9-----*/}
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd9} className='img2' />
            <h1>Safety Pin <br /><span>(Per Box)</span><br /><span>P 30.00</span></h1>
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