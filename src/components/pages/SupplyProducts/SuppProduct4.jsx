import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import SuppProd10 from '/src/components/image/supp10.png'
import SuppProd11 from '/src/components/image/supp11.png'
import SuppProd12 from '/src/components/image/supp12.png'



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
      
        {/*-----Product 10-----*/}
        
          <div className='supp-card'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={SuppProd10} className='img2' />
              <h1>Rubber bands <br /><span>(Per Box)</span><br /><span>P 40.00</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        
        {/*-----Product 11-----*/}
        
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd11} className='img2' />
            <h1>Cutter <br /><span>(Per Piece)</span><br /><span>P 35.00</span></h1>
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
            <img src={SuppProd12} className='img2' />
            <h1>Sharpener <br /><span>(Per Piece)</span><br /><span>P 15.00</span></h1>
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