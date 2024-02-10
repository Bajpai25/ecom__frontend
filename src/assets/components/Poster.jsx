import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { useCart } from '../Context/CartContext';

function Poster() {
  const [access,setaccess]=useState(false);
  

   useEffect(()=>{
    if(localStorage.getItem('admin-token')==="bajpai.shashwat.332@gmail.com"){
      setaccess(true);
     }
     else{
      setaccess(false);
     }
   },[])

  return (
    <div>
    <div className='bg-gray-100 h-full w-full pt-24 pb-24 md:flex md:flex-row flex flex-col   '>
    <div className='md:w-1/2 w-auto flex flex-col md:ml-20 md:mt-20 m-auto'>
      <h1 className='md:text-6xl text-2xl font-sans font-light uppercase md:p-6 p-3'>Unleash Your Style,<br/> Shop with Confidence!</h1>
    <Link to="/products">
      <button className='bg-green-500 rounded-lg text-white md:text-xl text-md w-32 mb-6 md:mt-8 mt-2 md:p-3 p-2 md:w-40  md:ml-8 ml-2 hover:bg-blue-500'>Explore</button></Link>
    </div>
      <div className='flex flex-row justify-end w-full'>
    <img  src="./hero.svg" alt="Your SVG" className='w-full h-full'></img>
    </div>
    </div>
    <h1 className='text-center md:text-3xl text-lg font-sans font-semibold p-6'>Welcome : {localStorage.getItem('admin-token')}</h1>
    {access?( <Link to="/add">
      <button className='bg-blue-500 rounded-md w-40 p-2  m-4 md:text-2xl text-lg text-white '>Dashboard</button>
      </Link>):null}
    <div className='md:flex md:flex-row justify-center gap-12  flex flex-col mt-6 mb-6 mr-2 ml-2'>
    <Link to="/mens-item">
   <img src="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg" className='w-[300px] h-[168px] shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-[#333]'></img>
    </Link>
    <Link to="/womens">
    <img src="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg" className='w-[300px] h-[168px] shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-[#333]'></img>
    </Link>
    <Link to="/other">
    <img src="https://images.pexels.com/photos/5632364/pexels-photo-5632364.jpeg?auto=compress&cs=tinysrgb&w=600" 
    className='w-[300px] h-[168px] shadow-lg shadow-gray-300 hover:shadow-lg hover:shadow-[#333] '></img>
  </Link>
    </div>
    
    </div>
  )
}

export default Poster