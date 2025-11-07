import React from 'react'
import './App.css'
import { Routes,Route, Router, Form, BrowserRouter} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Navbar from './components/Navbar'
import PageNF from './components/pages/PageNF'
import Service from './components/pages/Service'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUp'
import Footer from './components/pages/Footer'
import LogIn from './components/LogIn'








function App() {
  return (
    <>
      <BrowserRouter basename='/galleryPortfolio'>
      <Navbar/>
        <Routes> 
          <Route path='/' element={<Homepage/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/sign' element={<SignUp/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='*' element={<PageNF/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
