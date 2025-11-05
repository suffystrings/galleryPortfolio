import React from 'react'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Navbar from './components/Navbar'
import PageNF from './components/pages/PageNF'
import Service from './components/pages/Service'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUp'









function App() {
  return (
    <>
      <HashRouter>
      <Navbar/>
        <Routes> 
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/sign' element={<SignUp/>}/>
          <Route path='*' element={<PageNF/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
