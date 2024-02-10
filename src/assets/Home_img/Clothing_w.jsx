import React from 'react'

function Clothing_w() {
  const clothes=[
    {id:1,
    image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71hHe9qwy3L._SY741_.jpg",
    title:"Kurta with Plazzo"
    },
    {
      id:2,
      image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31tnxjLV0dL.jpg",
      title:"Orange Dress"
    },
    {
      id:3,
      image:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1690528299_9291028.jpg?w=360&dpr=1.0",
      title:"Cropped Top"
    }
  ]
  return (
    <div>
      <div className='md:flex md:flex-row flex-col justify-evenly gap-12'>
        {clothes.map((item,id)=>{
          return (
            <div key={id} className='shadow-md w-auto h-auto mt-8 mb-8 shadow-gray-300 rounded-md '>
              <img src={item.image} className='h-[340px] bg-cover w-[260px]' alt=""/>
              <h1 className='text-center pt-6 font-sans font-semibold text-xl'>{item.title}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Clothing_w