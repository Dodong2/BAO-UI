import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import SuppProd19 from '/src/components/image/supp19.png'
import SuppProd20 from '/src/components/image/supp20.png'



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
      
        {/*-----Product 19-----*/}
        
          <div className='supp-card'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={SuppProd19} className='img2' />
              <h1>Glue gun stick <br /><span>(Per Piece)</span><br /><span>P 7.00</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        
        {/*-----Product 20-----*/}
        
        <div className='supp-card'>
          <div className='card-contents'>
            <img src={LspuLogo1} className='img1' />
            <img src={SuppProd20} className='img2' />
            <h1>Elmer's Glue Stick <br /><span>(Per Piece)</span><br /><span>P 75.00</span></h1>
          </div><br />
          <div className='card-stocks'>
            <button onClick={DecrementCount}><RiSubtractFill /></button>
            <div>{count}</div>
            <button onClick={IncrementValue}><IoMdAdd /></button>
          </div>
        </div>

    </>
  );
}