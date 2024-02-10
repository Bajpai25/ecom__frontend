import React, { useState,useEffect } from 'react'
import Nav from '../components/Nav';
import { useCart } from '../Context/CartContext';
import {Link} from 'react-router-dom'

function All_w() {
 
  const {state}=useCart();
  
  

  function scroll(){
    window.scroll(0,0);
  }


  return (
    <div>
      <Nav/>
    <div className="md:flex md:flex-row flex flex-col   gap-8 flex-wrap justify-around pt-20 ml-8 mr-8">
      {state.filter((item)=> item.category==='womens-dresses' || item.category==='womens-shoes' || item.category==='womens-shoes' || item.category==='womens-bags').map((item,id)=>{
        return(
          <Link to={`/products/${item._id}`} onClick={scroll}><div key={id} className='shadow-lg shadow-gray-300 rounded-md p-4'>
            <div className="w-[300px] h-auto">
              <img src={`/images/${item.image}`} className='w-[300px] h-[300px] flex flex-row gap-12 shadow-md shadow-gray-300'/>
              <div className=' uppercase p-2 text-gray-500'>
                <h1 className="text-2xl text-center font-semibold font-[roboto]">{item.title}</h1>
                <h3 className="text-xl text-center font-medium font-[roboto] ">$ {item.price}</h3>
              </div>
            </div>
          </div>
          </Link>
        )
      })}
      </div>
    </div>
  )
}

export default All_w