import { useState, useEffect } from 'react';
import { RiSubtractFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
// import supply nproducts pic
import LspuLogo1 from '/src/components/logo/LSPUlogo.png'
import { BooksData } from './BooksData'
//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function App() {
  //Aos
  useEffect(() => {
    AOS.init( {
      duration: 1200
  })
  }, [])

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
      <div className='product-list' data-aos="fade-up-right" data-aos-duration="3000">
        {/*-----Product 1-----*/}
        {BooksData.map((book, index) => (
          <div key={index} className='merch-card'>
            <div className='merch-card-contents'>
              <img src={LspuLogo1} className='img1' />
              <img src={book.img} className='img2' />
              <h1>{book.productName} <br /><span>{book.price}</span></h1>
            </div><br />
            <div className='card-stocks'>
              <button onClick={DecrementCount}><RiSubtractFill /></button>
              <div>{count}</div>
              <button onClick={IncrementValue}><IoMdAdd /></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}