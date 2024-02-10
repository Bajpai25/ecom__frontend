import React,{useEffect,useState} from 'react';
import { useCart } from '../Context/CartContext';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';


function SingleProduct() {
  const { state,addtocart} = useCart();


  const { id } = useParams();
  console.log(id);
  function scroll(){
    window.scrollTo(0,0);
  }


  const product = state.find((item)=>(item._id) === id);
  
  if (!product) {
    return <div>
      <Nav/>
      <div className='flex flex-col justify-center gap-8 '>
      <h1 className='text-center pt-32 text-2xl font-mono font-semibold'>Product not found!</h1>
      <div className='m-auto '><Link to="/products"><button className='bg-blue-500 w-36 p-2 text-xl rounded-md text-white hover:bg-green-500'>Products Page</button></Link>
      </div>
      </div>
      </div>
  }

  return (
    <div>
      <Nav/>
      <div className='pt-24 md:flex md:flex-row flex flex-col  justify-around gap-8 pb-12'>
        <div>
        <div className='flex flex-col flex-1 shadow-gray-400 shadow-md rouned-md bg-gray-300 p-4'>
          <img className='rounded-md hover:shadow-white hover:shadow-lg' src={`/images/${product.image}`}/>
          </div>
          <div className='flex flex-row flex-wrap gap-12 mt-8 '>
            <div><img className='w-[120px] h-[120px] bg-cover shadow-gray-400 p-2 shadow-md round-md ' src={`/images/${product.image}`}/></div>
            <div><img className='w-[120px] h-[120px] bg-cover shadow-gray-400 p-2 shadow-md round-md' src={`/images/${product.image}`}/></div>
            <div> <img className='w-[120px] h-[120px] bg-cover shadow-gray-400 p-2  shadow-md round-md' src={`/images/${product.image}`}/></div>
          </div>
          </div>
        <div className=' text-left shadow-gray-500 shadow-lg rounded-md md:w-1/2 w-auto h-auto ml-3 mr-3 p-12 flex flex-col gap-2'>
          <div><h1 className='text-3xl font-semibold font-sans'>{product.title}</h1></div>
          <div className='flex flex-col gap-3'> 
          <h2 className='text-xl font-medium text-gray-500' >₹ {83*product.price - (product.discountPercentage*product.price)}</h2>
          <h2 className='line-through text-gray-500'>MRP ₹ {83*product.price}</h2>
          <h2 className='text-xl font-medium text-gray-500'>({product.discountPercentage}% OFF )</h2>
          <h4 className='text-xl font-medium text-blue-500'>Inclusive of all taxes</h4>
          </div>
          <div>
            <h2 className='text-xl font-medium text-gray-500'>Description</h2>
            <p className='text-xl font-light text-gray-500'>{product.description}</p>
            </div>
          <div className='flex flex-row gap-4 pt-6 pb-6'>
            <button className='bg-blue-500 text-white rounded-md p-2 text-md'>SELECT SIZE</button>
            <button className='bg-blue-500 text-white rounded-md p-2 text-md'>SIZE CHART</button>
            </div>
            <div className='flex flex-row gap-4 pt-4 pb-6'>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>XS</button>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>S</button>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>M</button>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>L</button>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>XL</button>
              <button className='rounded-full p-2 bg-gray-500 hover:bg-blue-500 text-white text-sm w-12'>XXL</button>
            </div>            
              <div><h3 className='text-blue-400'>Check Delivery Options</h3></div>
            <div>
              <input className='w-1/2 border-2 border-gray-300 border-rounded-md p-2' type='text' placeholder='Enter PINCODE'/>
            </div>
            <div className='text-gray-500 pt-4 '>
              <p>100% Original Products<br/>
                 Pay on delivery might be available<br/>
                 Easy 14 days returns and exchanges<br/>
                 Try & Buy might be available</p>
            </div>
            <div className='flex flex-row justify-center gap-6 pt-6'>
              <button onClick={()=>{addtocart((id))}} className='bg-red-400 w-auto text-white rounded-md p-2 text-lg hover:bg-green-500 p-3'>ADD to CART
              </button>
              <div>
              </div>
              </div>
          </div>
        </div>
        <div>
          <h1 className='text-center pt-6  md:text-4xl text-2xl font-sans font-medium underline-2'>Related Products</h1>
          <div className="md:flex md:flex-row flex flex-col gap-8 flex-wrap justify-around pt-20 m-auto pb-12 ml-4 mr-4">
            {state.filter((item)=>item.category===product.category).map((item,id)=>{
              return (
                <Link to={`/products/${item._id}`} onClick={scroll}><div key={id} className='shadow-lg shadow-gray-300 hover:shadow-gray-400 rounded-md p-4'>
            <div className="md:w-[300px] w-auto h-auto">
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
      </div>
  );
}

export default SingleProduct;
