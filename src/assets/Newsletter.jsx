import React from 'react'

function Newsletter() {
  
  return (
    <div>
      <div name='contact' className='w-auto h-auto  flex justify-center items-center p-4  ' >
        <form method='POST' action="https://getform.io/f/5de89f90-00d7-4f7d-be67-4b23c221f0fe" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>Contact</p>
                <p className='text-black py-4'>// Submit the form below or shoot me an email - bajpai.shashwat.332@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] text-black p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] text-black p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black bg-gray-600 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        </div>
    </div>
  )
}

export default Newsletter
