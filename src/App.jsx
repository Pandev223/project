import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Aboutus from './Aboutus/Aboutus'
import Blog from './Blog/Blog'
import Shop from './Shop/Shop'
import Contactus from './Contactus/Contactus'
import Nav from './components/Nav'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Nav/>
    <Routes>
     <Route path='/' element=<Home/> />
     <Route path='/Shop' element=<Shop/> />
     <Route path='/Aboutus' element=<Aboutus/> />
     <Route path='/Blog' element=<Blog/> />
     <Route path='/Contactus' element=<Contactus/> />
     <Route path='/Login' element=<Login/> />
    </Routes>
    </>
  )
}

export default App
