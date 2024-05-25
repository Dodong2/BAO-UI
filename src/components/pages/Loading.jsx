import LspuLogo1 from '../logo/LSPUlogo.png'
import Load from './Load.module.css'
import { useState, useEffect } from 'react'
const Loading = () => {
  /*Timer*/
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1100)


    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    <div className="main-container">
    <div className={`${Load["loading-container"]} ${isLoading ? 'visible' : 'hidden'}`}>
    <div className={Load["loading-contents"]}>
    <img src={LspuLogo1}/><br/><br/>
    <div className={Load["loader"]}></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Loading

