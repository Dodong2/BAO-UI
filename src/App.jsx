import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About'
import  Supply from './components/pages/Supply'
import Other from './components/pages/Others'
import Merchandise from './components/pages/Merchandise'
import Cart from './components/pages/Cart'
import Receipt from './components/pages/Receipt'
import Contact from './components/pages/Contact';
function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Supply' element={<Supply/>}/>
      <Route path='/Receipt' element={<Receipt/>}/>
      <Route path="/Other" element={<Other/>}/>
      <Route path="/Merchandise" element={<Merchandise/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
