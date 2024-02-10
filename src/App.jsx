import React from 'react'
import {Route,  Routes} from "react-router-dom"
import Home from './assets/components/Home'
import Products from './assets/components/Products'
import All_w from './assets/Section_W/All_w'
import All_m from './assets/Section_M/All_m'
import Other from './assets/Section_other/Other'
import Register from './assets/Auth/Register'
import Login from './assets/Auth/Login'
import About from './assets/About'
import Single_product from './assets/Carts/Single_product'
import Carts from './assets/Carts/Carts'
import Add_product from './assets/Dashboard/Add_product'
import Success from './assets/Carts/Success'
import Cancel from './assets/Carts/Cancel'

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/womens" element={<All_w/>}></Route>
        <Route path="/mens-item" element={<All_m/>}></Route>
        <Route path="/other" element={<Other/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products/:id" element={<Single_product/>}></Route>
        <Route path='/cart' element={<Carts/>}></Route>
        <Route path="/add" element={<Add_product/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="/cancel" element={<Cancel/>}></Route>
      </Routes>
    </div>
  )
}

export default App