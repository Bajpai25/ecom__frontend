import React,{useState,useEffect} from 'react'
import Nav from '../components/Nav';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

function Other() {
    const {state,setstate}=useCart();

    function scroll(){
      window.scroll(0,0);
    }
  async function getother_products(){
    const response=await fetch('https://stylis-backend.onrender.com/getproducts',{
      method:"GET",
      headers:{'Content-Type':'application/json'}
    })
    const data=await response.json();
    setstate(data.data);
  }
  useEffect(()=>{
    getother_products();
  },[])

  return (
    <div>
      <Nav/>
    <div className="md:flex md:flex-row flex flex-col ml-8 mr-8  gap-8 flex-wrap justify-around pt-24">
      {state.filter((item)=>{return item.category==="smartphones" || item.category==="laptop" || item.category==='groceries' || item.category==="automotive" || item.category==="furniture" || item.category==="skincare" || item.category==="motorcycle" || item.category==="sunglasses" || item.category==="Lighting" }).map((item,id)=>{
        return(
          <Link to={`/products/${item._id}`} onclick={scroll}><div key={id} className='shadow-lg shadow-gray-300 rounded-md p-4'>
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

export default Other