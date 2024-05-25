import { useState } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import { SupplyProduct } from './SuppProdData'
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
// import SuppProd2 from '/src/components/image/supp2.png'
// import SuppProd3 from '/src/components/image/supp3.png'


export default function App() {
  const [count, setcount] = useState(Array(SupplyProduct.length).fill(0));
  //add value
  const IncrementValue = (index) => {
    setcount((prevCounts) => {
      const newCounts = [...prevCounts]
      newCounts[index] += 1
      return newCounts
    })
  }
  //minos value
  const DecrementCount = (index) => {
      setcount((prevCounts) => {
        const newCounts = [...prevCounts]
        if(newCounts[index] > 0) {
          newCounts[index] -= 1
        }
        return newCounts
      })
    
  }

  return (
    <>
        {/*-----Product 1-----*/}
          <div className='supp-card'>
          {SupplyProduct.map((product, index) => (
            <div key={index} className='card-board'>
            <div className='card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={product.img} className='img2' />
              <h1>{product.productName} <br /><span>({product.per})</span><br /><span>{product.price}</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={() => DecrementCount(index)}><RiSubtractFill /></button>
              <div>{count[index]}</div>
              <button onClick={() => IncrementValue(index)}><IoMdAdd /></button>
            </div>
            </div>
          ))}
          </div>
    </>
  );
}