import React from 'react'
import Nav from './components/Nav'
import { FaLinkedin } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import Newsletter from './Newsletter';

function About() {
  return (
    <div>
        <Nav/>
        <div className='pt-24 text-center pb-16'>
            <p><span className='md:text-6xl text-3xl text-gray-600 font-poppins'>A</span><span className='md:text-4xl text-2xl text-gray-600 font-poppins'>bout</span><span className='md:text-6xl text-3xl text-gray-600 font-poppins'>US</span></p>
            </div>
      <div className='mt-4 md:flex md:flex-row flex flex-col  justify-around gap-12 '>
        <img src="./about.png" className='md:w-[600px] w-auto h-auto'></img>
        <div>
            <p className='text-center p-8 md:text-3xl text-lg font-sans font-light font-gray-500'>Welcome to Stylis – Your Ultimate Fashion Destination!<br/>
At Stylis, we believe that fashion is more than just clothing; it's a form of self-expression,<br/> a way to tell your unique story. Established with a passion for style and a commitment to quality,<br/> Stylis is your go-to destination for the latest trends and timeless classics.</p>
        </div>
      </div>
      <div className='pt-12 pb-18'>
        <h1 className='text-center md:text-4xl text-2xl font-sans font-semibold text-blue-500 pb-8'>Connect with us!</h1>
        <div className='flex flex-wrap md:gap-12 gap-6 justify-center mt-6 mb-12'>
            <FaFacebook className='h-12 w-12 hover:text-blue-500'/>
            <FaInstagram className='h-12 w-12 hover:text-blue-500'/>
            <FaTwitter className='h-12 w-12 hover:text-blue-500'/>
            <FaLinkedin className='h-12 w-12 hover:text-blue-500'/>
        </div>
    <Newsletter/>
    </div>
    </div>
  )
}

export default About
