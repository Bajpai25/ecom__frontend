import React from 'react'
import Nav from './Nav'
import Poster from './Poster'
import Home_img from "../Home_img/Home_img"
import Footer from '../components/Footer'
import Ad from '../components/Ad'
import Newsletter from '../Newsletter'


function Home() {
  return (
    <div>
     <Nav/>
     <Poster/>
     <Home_img/>
     <Ad/>
     <Newsletter/>
     <Footer/> 
    </div>
  )
}

export default Home