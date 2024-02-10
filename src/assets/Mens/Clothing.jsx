import React from 'react'

function Clothing() {
  const array=[
    {id:1,
    src:"https://m.media-amazon.com/images/I/71SNEa-l3xL._AC_UL320_.jpg",
  title:"Casual Shirt"
},{
  id:2,
    src:"https://m.media-amazon.com/images/I/41ySXF78faL._AC_UL320_.jpg",
  title:"Mens's Compression"
},
{
  id:3,
    src:"https://m.media-amazon.com/images/I/71cBRecEqLL._AC_UL320_.jpg",
  title:"Hoodie"
}
  ]
  return (
    <div>
      <div className='md:flex md:flex-row flex-col  justify-evenly gap-12'>
        {array.map((item,id)=>{
          return (
            <div key={id} className='shadow-md w-auto h-auto mt-8 mb-8 shadow-gray-300 rounded-md '>
              <img src={item.src} className='h-[280px] bg-cover w-[260px]' alt=""/>
              <h1 className='text-center pt-6 font-sans font-semibold text-xl'>{item.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Clothing