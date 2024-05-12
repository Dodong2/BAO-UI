import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login'
import './App.css'
import Home from './components/pages/Home'


function App() {
  // const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
