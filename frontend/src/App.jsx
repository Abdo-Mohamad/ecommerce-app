import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/HOME.jsx'
import About from './pages/ABOUT.jsx'
import Contact from './pages/Contact.jsx'
import Collection from './pages/collection.jsx'
import Product from './pages/Product.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
