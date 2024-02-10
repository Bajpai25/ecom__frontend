import React,{useState} from 'react'
import Clothing_w from "./Clothing_w"
import Shoes_w from './Shoes_w';
import Accessories_w from "./Accessories_w"
import Clothing from "../Mens/Clothing"
import Shoes from "../Mens/Shoes"
import Accessories from "../Mens/Accessories"
import {Link} from "react-router-dom"

function Home_img() {
 const [selected,setselected]=useState(<Clothing_w/>);
 const [selected_2,setselected_2]=useState(<Clothing/>);

 function render(component){
  setselected(component)
 }
 function render_2(component){
  setselected_2(component)
 }
  return (
    <div>
    <div className='flex flex-col justify-around gap-12 m-8'>
    <div className=''>
        <Link to="/womens"><img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className=' m-auto w-auto hover:shadow-lg hover:shadow-gray-400'></img></Link>
        </div>
        <div className=' '>
          <div className='text-gray-700 
           md:flex 
          md:flex-row justify-around md:gap-8 gap-3  flex flex-col  w-auto
          shadow-lg shadow-gray-200 m-6 '>
            <button onClick={()=>render(<Clothing_w/>)} className='hover:text-black w-1/3   hover:border-b-2 hover:border-b-blue-500'>Clothing</button>
            <button onClick={()=>render(<Shoes_w/>)} className=' hover:text-black w-1/3 hover:border-b-2 hover:border-b-blue-500'>Shoes</button>
            <button onClick={()=>render(<Accessories_w/>)} className='hover:text-black w-1/3 hover:border-b-2 hover:border-b-blue-500'>Accessories</button>
          </div>
          <div>
            {selected}
          </div>
          </div>
          </div>
          <div>
          <div className='ml-2 mr-2'>
        <Link to="/mens-item"><img src="https://images.pexels.com/photos/840916/pexels-photo-840916.jpeg?auto=compress&cs=tinysrgb&w=600" 
        className='h-auto m-auto w-auto  hover:shadow-lg hover:shadow-gray-400'></img></Link>
        </div>
          </div>
          <div className='md:flex md:flex-row justify-around gap-12 m-8   '>
          <div className='flex flex-col gap-6'>
          <div className='text-gray-700 
           md:flex 
          md:flex-row justify-around gap-8 
         shadow-lg shadow-gray-200 m-6 flex flex-col w-auto'>
            <button onClick={()=>render_2(<Clothing/>)} className='hover:text-black w-1/3   hover:border-b-2 hover:border-b-blue-500'>Clothing</button>
            <button onClick={()=>render_2(<Shoes/>)} className='hover:text-black w-1/3   hover:border-b-2 hover:border-b-blue-500'>Shoes</button>
            <button onClick={()=>render_2(<Accessories/>)} className='hover:text-black w-1/3   hover:border-b-2 hover:border-b-blue-500'>Accessories</button>
          </div>
          <div>
            {selected_2}
          </div>
          </div>
          
    </div>
    </div>
  )
}
export default Home_img