import {React,useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import {FaCartShopping } from "react-icons/fa6"
import {FiSearch} from "react-icons/fi"
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"
import { useCart } from '../Context/CartContext';

function Nav() {
  const [click,setclick]=useState(false);
  const {cartItem} = useCart();

  const items=Object.values(cartItem).reduce((sum,item)=>sum+=item,0);
  
  const handleclick=()=>{
    setclick(!click);
  }

  return (
  <div className='shadow-lg shadow-gray-400  fixed w-full bg-white' >
    <div className='flex flex-row md:justify-between md:gap-8  justify-between gap-2'>
      <div className='flex flex-row gap-4 pl-3'>
      <Link to="/"><img src="/new.jpeg" className='h-16 w-16 rounded-full p-1'></img></Link>
      <h1 className='pt-2 text-3xl font-mono font-semibold uppercase text-gray-500'>Stylis</h1>
      </div>
      <div className='hidden md:flex md:flex-row gap-4 pt-3 text-lg font-light font-gray-300 '>
        <Link to="/"><h1 className='hover:border-b-2 border-blue-500 '>Home</h1></Link>
        <Link to="/products"><h1 className='hover:border-b-2 border-blue-500'>Products</h1></Link>
        <Link to="/mens-item"><h1 className='hover:border-b-2 border-blue-500'>Mens</h1></Link>
        <Link to="/womens"><h1 className='hover:border-b-2 border-blue-500'>Womens</h1></Link>
        <Link to="/about"><h1 className='hover:border-b-2 border-blue-500'>About</h1></Link>
        </div>      
      <div className=' flex flex-row gap-3 md:pr-4 pt-2'>
     <Link to="/cart">
      <div className='relative'>
      <FaCartShopping className='h-10 w-10 p-2 relative hover:border-b-2 border-blue-500'/>
      </div>
      <div className='absolute top-0'><button className='absolute top-0 w-5 p-auto text-sm bg-gray-300 text-blue-500 rounded-full'>{items}</button></div>  
      </Link>
      {localStorage.getItem('auth-token')?(<div onClick={()=>{localStorage.removeItem('auth-token');localStorage.removeItem('admin-token');window.location.replace('/')}} className='flex flex-row gap-3 hover:border-b-2 border-blue-500 '>
      <h1 className='hidden md:block text-lg  font-light font-gray-300 pt-1 '>Logout</h1>
      <FaUserCircle  className=' h-10 w-10 p-2'></FaUserCircle>
     </div>):(<Link to="/Login"><div className='flex flex-row gap-3 hover:border-b-2 border-blue-500 '>
      <h1 className='hidden md:block text-lg  font-light font-gray-300 pt-1 '>Login</h1>
      <FaUserCircle className=' h-10 w-10 p-2'></FaUserCircle>
     </div></Link>)}
      </div>
      <div className='md:hidden'>
      <GiHamburgerMenu className='md:hidden  h-10 w-10 m-2 ml-0' onClick={handleclick}/>
      </div>
    </div>
    <div className='pl-2'>
    {click ?( 
      <div className=' md:hidden flex flex-col justify-end gap-2 pt-1 text-lg font-light font-gray-300 w-[80px]'>
        <Link to="/"><h1 className='hover:border-b-2 border-blue-500 '>Home</h1></Link>
        <Link to="/products"><h1 className='hover:border-b-2 border-blue-500'>Products</h1></Link>
        <Link to="/mens-item"><h1 className='hover:border-b-2 border-blue-500'>Mens</h1></Link>
        <Link to="/womens"><h1 className='hover:border-b-2 border-blue-500'>Womens</h1></Link>
        <Link to="/about"><h1 className='hover:border-b-2 border-blue-500'>About</h1></Link>
        </div>
        
        ) :(
        null
      )}
      </div>
  </div>
  )
}

export default Nav