import React from 'react'
import Nav from '../components/Nav'
import {useCart} from '../Context/CartContext'
import { Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';



function Carts() {
  const {cartItem,state,removefromcart,addtocart} = useCart();
  const values=Object.values(cartItem).reduce((sum,item)=>sum+=item,0);
  console.log(cartItem);
  let total=0;
  console.log(state);


  const key="pk_test_51Od9AOSDADjm2ZwN4X7fqdga7xVVqB14w7zGHs4YGPgNGmSD0HwFr4EFtCrCVP60CixZfFddDk0cGq5xPW3BWE7r00WnIXYlrP"
  

  const products = state
  .filter((item) => cartItem[item._id] > 0)
  .map((item) => {
    return {
      id: item._id,
      name: item.title,
      quantity: cartItem[item._id],
      price: 83 * item.price 
    };
  });

console.log(products);

  
  async function payment(){
    const stripe=await loadStripe(key); 
    if(localStorage.getItem('auth-token')){
    const response=await fetch('https://stylis-backend.onrender.com/checkout',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        products
      })
    })
    const session=await response.json();
    console.log(session);

    const result=await stripe.redirectToCheckout({
      sessionId:session.id
    })
    
    console.log(session.id);
  }
  else{
    alert('Please Login to continue');
  }
    
    if(result.error){
      console.log(result.error.message);
    }

  }

  return (
    <div  className='bg-gray-400'>
      <Nav/>
      <div  className='pt-16 ' >
        <div className='md:flex md:flex-row flex-wrap md:m-0 md:m-auto  md:justify-around  p-4 shadow-md shadow-gray-400  pb-20  '>
        <div className='flex flex-col gap-4 '>
        <h1 className='text-center font-sans text-3xl pt-6 pb-8 text-white font-bold'>Cart - {values} items </h1>
          {state.length===0?(<div className='text-white text-center '>
            <h1>No Orders Found!!</h1>
            <h1>Keep Shopping!!</h1>
            <Link to="/products"><button className='bg-blue-500 w-32 text-white text-lg rounded-md mt-8 p-2'>Return</button></Link>
          </div>):(
            state.map((item)=>{
              if(cartItem[item._id]>0){
                return (<>
                <div key={item._id} className='flex flex-row  gap-12  md:w-[500px] w-auto  h-[220px] p-auto m-3  shadow-md shadow-white  p-2 rounded-md bg-white'>
                  <div>
                    <img className=' rounded-md  shadow-md w-[200px] h-[200px] m-auto  p-auto' src={`/images/${item.image}`}/>
                  </div>
                  <div className='flex flex-col gap-2 p-2'>
                  <div>
                    <h1 className='md:text-xl text-lg  font-sans font-semibold'>{item.title}</h1>
                  </div>
                  <div>
                    <h1 className='text-xl font-sans font-medium'>₹ {83*item.price*cartItem[item._id]}</h1>
                    <h1 className='hidden'>{total+=83*item.price*cartItem[item._id]}</h1>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <button className='bg-green-500 rounded-md w-12 text-lg font-medium text-white p-auto' onClick={()=>{addtocart(item._id)}}>+</button>
                    <div><h1 className='text-xl text-gray-600 '>{cartItem[item._id]}</h1></div>
                    <button className='bg-red-500 rounded-md w-12 text-lg font-medium p-auto text-white' onClick={()=>{removefromcart(item._id)}}>-</button>
                    </div>
                    </div>
                    </div>
                    </>
                )
              }
          }
            )
          )
          }
        </div>
        <div className='shadow-md shadow-md shadow-gray-300 w-[300px] m-6 rounded-md p-auto mt-24 h-[350px] bg-white flex flex-col gap-6'>
          <div><h1 className='text-center font-sans font-semibold p-4 text-2xl text-blue-600 border-b-2 border-gray-300'>Summary</h1></div>
          <div>
          <h1 className='text-center text-xl text-gray-500 font-medium p-2'>Products : {values}</h1>
          <h1 className='text-center text-xl text-gray-500 font-medium p-2'>Total : ₹ {total}</h1>
          </div>
          <div>
          <Link to="/products"><button className='bg-blue-600 text-white rounded-md p-auto text-md w-52 p-2 font-medium ml-14 mb-4 '>Products</button></Link>
          <button onClick={()=>{payment()}} className='bg-blue-600 text-white rounded-md p-auto text-md w-52 p-3 font-medium ml-14 '>GO TO CHECKOUT</button>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Carts
