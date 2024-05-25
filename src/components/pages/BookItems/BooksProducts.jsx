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

  const [count, setcount] = useState(Array(BooksData.length).fill(0));
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
      if (newCounts[index] > 0) {
        newCounts[index] -= 1
      }
      return newCounts
    })
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