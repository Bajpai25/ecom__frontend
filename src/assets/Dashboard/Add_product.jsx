import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Nav from '../components/Nav';
import { useCart } from '../Context/CartContext';

function Add_product() {
    const [image, setImage] = useState();
    const [title, settitle] = useState();
    const [price, setPrice] = useState();
    const [description, setdescription] = useState();
    const [discountPercentage, setdiscountPercentage] = useState();
    const [stock, setstock] = useState();
    const [brand, setbrand] = useState();
    const [category, setcategory] = useState();
    const [productdata, setproductdata] = useState([]);
    

    async function submit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',image);
        formData.append('title',title);
        formData.append('price' ,price);
        formData.append('description',description);
        formData.append('discountPercentage',discountPercentage);
        formData.append('stock',stock);
        formData.append('brand',brand);
        formData.append('category',category);
        const response=await axios.post("http://localhost:5000/addproduct",formData,{
            headers:{'Content-Type':'multipart/form-data'}
        });
        if(response.status===200){
            alert("product added");
            window.refresh();
            
        }
        else{
            alert("product not added");
        }
        console.log(formData);
    }

    async function getproducts(){
        const response=await fetch("https://stylis-backend.onrender.com/getproducts",{
            method:"GET",
            headers:{'Content-Type':'application/json'}
        });
        const data=await response.json();
        console.log(data);
        setproductdata(data.data);
    }
    useEffect(() => {
        getproducts();
    },[])

    return (
        <div>
            <Nav/>
            <h1 className='md:text-4xl text-center pt-20 text-2xl p-4 font-sans font-semibold text-gray-500'>Dashboard</h1>
        <div >
            <h1 className='text-3xl font-sans text-center p-4 text-gray-500'>Add Products</h1>
            <form encType='multipart/form-data' onSubmit={submit} className='md:w-3/4 h-auto w-auto md:m-auto m-6  shadow-md shadow-gray-400 rounded-md flex flex-col gap-6 md:justify-center md:items-center justify-start pl-12 pt-12 pb-8'>
                <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                    <label className='text-xl font-sans text-gray-500 font-medium'>Title</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={title}  onChange={(e)=>{settitle(e.target.value)}} type='text' placeholder='name' />
                </div>
            <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Price</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={price} type="number" onChange={(e)=>{setPrice(e.target.value)}} placeholder='price' />
            </div>
            <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Discount</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={discountPercentage} type="number" onChange={(e)=>{setdiscountPercentage(e.target.value)}} placeholder='discount' /></div>
            
            <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Stock</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={stock} type="number" onChange={(e)=>{setstock(e.target.value)}} placeholder='stock' /></div>
            
           <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
            <label className='text-xl font-sans text-gray-500 font-medium'>Brand</label>
            <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={brand} type="text" onChange={(e)=>{setbrand(e.target.value)}} placeholder='brand' /></div>
            
            <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Category</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2' value={category} type="text" onChange={(e)=>{setcategory(e.target.value)}} placeholder='category' /></div>

                <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Description</label>
                <textarea className='border-2 md:w-[300px] w-3/4  h-[200px] text-lg text-gray-500 border-gray-200 p-2' value={description}  onChange={(e)=>{setdescription(e.target.value)}} type='text' placeholder='description' /></div>
            
            <div className='md:flex md:flex-row flex flex-col md:gap-20 gap-6'>
                <label className='text-xl font-sans text-gray-500 font-medium'>Choose Image</label>
                <input className='border-2 md:w-[300px] w-3/4 h-auto text-lg text-gray-500 border-gray-200 p-2'  type="file" onChange={(e)=>{setImage(e.target.files[0])}}  /></div>
            <button type="submit"className='bg-blue-500 text-white rounded-md text-lg w-36 hover:bg-green-500 p-2 mb-4' >Submit</button>
            </form>
            {/* <div>
                {productdata.map((item,id)=>{
                    return (
                    <div key={id} >
                        <h1>{item.name}</h1>
                        <h1>{item.price}</h1>
                        <img src={`/images/${item.image}`} className='h-[100px] w-[100px]' alt=""/>
                    </div>
                    )
                })}
            </div> */}
        </div>
        </div>
    );
}

export default Add_product

