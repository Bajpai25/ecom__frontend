import React from 'react'

function Accessories_w() {
  const accessories=[
    {id:1,
    src:"https://m.media-amazon.com/images/I/81X3SXCnXdL._AC_UL320_.jpg",
    title:"Carry Pouch Bag"
    },
    {
      id:2,
      src:"https://m.media-amazon.com/images/I/51+oidGo3dL._AC_UL320_.jpg",
      title:"Gold Bracelet"
    },{
      id:3,
      src:"https://m.media-amazon.com/images/I/71FtXQVO78L._AC_UL320_.jpg",
      title:"Pearl Necklace"
    }
  ]
  return (
    <div>
       <div className='md:flex md:flex-row flex-col  justify-evenly gap-12'>
        {accessories.map((item,id)=>{
          return (
            <div key={id} className='shadow-md h-auto w-auto mt-8 mb-8 shadow-gray-300 rounded-md '>
              <img src={item.src} className='h-[340px] bg-cover w-[260px]' alt=""/>
              <h1 className='text-center pt-6 font-sans font-semibold text-xl'>{item.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Accessories_w