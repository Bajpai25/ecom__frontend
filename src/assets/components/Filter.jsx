import React, { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function Filter() {
  const [category, setCategory] = useState('');
  const {state}=useCart();


  function scroll(){
    window.scroll(0,0);
  }
  return (
    <div className=' pt-16'>
      <div className='md:flex md:flex-row flex flex-col justify-around gap-8 '>
      <div className='bg-gray-600 text-white pr-12 pl-4 pt-4 pb-2 '>
          <div className='md:flex md:flex-col  flex-wrap text-lg gap-4'>
            <div className='flex flex-row gap-2'><FaFilter className='m-1'/> <h1 className="text-xl font-semibold">Filter</h1></div>
            <h1 className="text-lg font-semibold" >Categories</h1>
            <div className="flex flex-col  gap-4">
            <div className='flex flex-row gap-2'><input type="checkbox"
            value="" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>All</label></div>
              <div className='flex flex-row gap-2'><input type="checkbox" 
                value="mens-shirts" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Mens-Clothing</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox" 
           value="womens-dresses" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Womens-Clothing</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox"  value="laptop" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Laptops</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox"  value="smartphones" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Smartphones</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox"  value="groceries" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Groceries</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox"  value="furniture" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Furniture</label></div>
            <div className='flex flex-row gap-2'><input type="checkbox"  value="automotive" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Automotive</label></div>
            <div className='flex flex-row gap-2'>
            <input type="checkbox"  value="motorcycle" onChange={(e)=>{setCategory(e.target.value)}} />
            <label>Motorcycle</label></div>
          </div>
          </div>
      </div>
      <div className='flex flex-row gap-8 flex-wrap'>
      {
        state.length==0?<h1>Loading</h1>:(
      state.filter((item)=>{return category===""|| item.category===category}).map((item,id)=>{
        return(
          <Link to={`/products/${item._id}`} onClick={scroll}><div key={id} className='shadow-lg shadow-gray-300 rounded-md p-4'>
            <div className="w-[300px] h-auto">
              <img src={`./images/${item.image}`} className='w-[300px] h-[300px] flex flex-row gap-12 shadow-md shadow-gray-300'/>
              <div className='text-center uppercase p-2 text-gray-500'>
                <h1 className="text-2xl font-semibold font-[roboto]">{item.title}</h1>
                <h3 className="text-xl font-medium font-[roboto] ">$ {item.price}</h3>
              </div>
            </div>
          </div>
          </Link>
        )
      })
    )}
      </div>
      </div>
      </div>
  );
}

export default Filter;
