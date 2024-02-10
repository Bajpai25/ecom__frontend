import React from 'react'

function Shoes_w() {
  const images=[
    {id:1,
    src:"https://m.media-amazon.com/images/I/71RlOgFT-wL._AC_UL320_.jpg",
    title:"Long Boots"
  },
  {
    id:2,
    src:"https://m.media-amazon.com/images/I/61ze7BBsuHL._AC_UL320_.jpg",
    title:"Sports Shoes"
  },{
    id:3,
    src:"https://m.media-amazon.com/images/I/51KneyYa1gL._AC_UL320_.jpg",
    title:"Heels Sandal"
  }
  ]
  return (
    <div>
       <div className='md:flex md:flex-row flex-col justify-evenly gap-12'>
        {images.map((item,id)=>{
          return (
            <div key={id} className='shadow-md  w-auto h-auto mt-8 mb-8 shadow-gray-300 rounded-md '>
              <img src={item.src} className='h-[340px] bg-cover w-[260px]' alt=""/>
              <h1 className='text-center pt-6 font-sans font-semibold text-xl'>{item.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shoes_w