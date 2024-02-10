import { Link } from "react-router-dom"
function Footer() {
   return (
     <div className='mt-60  bg-blue-200 bg-opacity-10 font-[Poppins] backdrop-blur-2xl text-slate-600 text-base font-normal'>
       <div className='md:flex md:flex-row flex flex-col flex-wrap justify-around px-8 py-8'>
         {/* About & Support */}
         <div className='flex flex-col gap-4'>
           <h1 className='text-slate-700 text-2xl font-semibold'>About & Support</h1>
           <p className='mt-8'>
             Discover the best shopping experience with us.<br/> From the latest trends to classic styles, find<br/> everything you need for your lifestyle.
           </p>
           <a href="#">Customer Service</a>
           <a href="#">Contact Us</a>
           <a href="#">FAQ</a>
         </div>
         
         {/* Shop Categories */}
         <div className='flex flex-col gap-3 mt-3'>
           <h1 className='text-slate-700 text-2xl font-semibold'>Shop Categories</h1>
           <div className='flex flex-col gap-4 mt-8'>
             <Link to="/mens-item">Mens</Link>
             <Link to="/womens">Womens</Link>
             <Link to="/other">Home & Kitchen</Link>
             <Link to="/other">Sports & Outdoors</Link>
             <Link to="/other">Electronics</Link>
             <Link to="/other">Linkutomotive</Link>
           </div>   
         </div>
         
         {/* Quick Links */}
         <div className='flex flex-col gap-3 mt-3'>
           <h1 className='text-slate-700 text-2xl font-semibold'>Quick Links</h1>
           <div className='flex flex-col gap-4 mt-8'>
             <a href="#">New Arrivals</a>
             <a href="#">Best Sellers</a>
             <a href="#">Offers & Deals</a>
             <a href="#">Gift Cards</a>
             <a href="#">Blog</a>
           </div>   
         </div>
         
         {/* Legal */}
         <div className='flex flex-col gap-3 mt-3'>
           <h1 className='text-slate-700 text-2xl font-semibold'>Legal</h1>
           <div className='flex flex-col gap-4 mt-8'>
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Use</a>
             <a href="#">Return Policy</a>
             <a href="#">Accessibility</a>
           </div>   
         </div>
       </div>
       
       {/* Footer Bottom */}
       <div className='flex flex-row flex-wrap justify-between px-8 py-8'>
         <div>
           <p className='text-slate-600 text-lg font-normal'>Terms & Conditions | Privacy Policy</p> 
         </div>
         <p className='text-slate-600 text-lg font-normal'>
           Copyright © 2023 BAJPAI TECHNOLOGIES | All rights reserved
         </p>   
       </div>
     </div>
   )
 }

  export default Footer