import React from 'react'
import { Link } from 'react-router-dom'
function Ad() {
  return (
    <div>
        <div className="bg-gray-300 m-8 rounded-md">
        <div className='md:flex md:flex-row flex flex-col  justify-center  gap-16'>
        <div className='flex flex-col gap-10'>
            <h1 className='text-center p-8 text-4xl font-bold font-serif'>Deal of the Week</h1>
            <div className='text-white text-2xl font-light pl-6 pr-6 text-center'>
                <p><em>Get carried away with style! This week's steal: Elegant handbags at unbeatable prices. 
                Grab yours now</em></p>
            </div>
            <div className=' text-white flex flex-row justify-center gap-2 pt-4 pb-4'>
                <h1 className='font-[roboto] text-3xl'>$35.00/</h1>
                <h3 className='font-[roboto] text-xl'>HanBag</h3>
            </div>
            <div className='text-center text-white font-mono text-lg flex flex-row justify-center gap-2 pt-4 pb-4'>
                <p className='bg-yellow-400 p-3'>29 <p>DAYS</p></p>
                <p className='bg-yellow-400 p-3'>06 <p>HRS</p></p>
                <p className='bg-yellow-400 p-3'>31 <p>MINS</p></p>
                <p className='bg-yellow-400 p-3'>26 <p>SECS</p></p>
            </div>
            <div className='flex justify-center'>
            <Link to="/products"><button className='bg-green-500 mb-4 text-white rounded-md p-2 text-xl md:w-[200px] w-auto h-auto' >SHOP NOW</button></Link>
        </div>
        </div>
        <div>
            <img src='https://images.pexels.com/photos/5868269/pexels-photo-5868269.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Ad