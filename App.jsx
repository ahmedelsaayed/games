import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Trainding from './components/Home/trainding/Trainding'
import Top from './components/top games/Top'
import Category from './components/category/Category'
import About from './components/About/About'
import Footer from './components/footer/Footer'
import 'react-router-dom'
import { Link , BrowserRouter,Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Shop'  element= {<Shop/>}></Route>
      <Route path='/' element= {<Home/>}></Route>
      <Route path='/product' element= {<Product/>}></Route>
      <Route path='/Contact' element= {<Contact/>}></Route>
    </Routes>
     <Trainding/>
     <Top/>
     <Category/>
     <About/>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
