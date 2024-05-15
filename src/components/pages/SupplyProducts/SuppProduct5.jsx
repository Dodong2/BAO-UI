import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import SuppProd13 from '/src/components/image/supp13.png'
import SuppProd14 from '/src/components/image/supp14.png'
import SuppProd15 from '/src/components/image/supp15.png'



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
      
        {/*-----Product 13-----*/}
        
          <div className='supp-card'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={SuppProd13} className='img2' />
              <h1>Protractor <br /><span>(Per Piece)</span><br /><span>P 20.00</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        
        {/*-----Product 14-----*/}
        
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd14} className='img2' />
            <h1>Ruler <br /><span>(Per Piece)</span><br /><span>P 12.00</span></h1>
          </div><br />
          <div className='card-stocks'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div>{count}</div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
          </div>
        </div>
        {/*-----Product -----*/}
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd15} className='img2' />
            <h1>Scissors <br /><span>(Per Piece)</span><br /><span>P 40.00</span></h1>
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