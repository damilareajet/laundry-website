// import React from 'react'
import { Routes, Route } from "react-router-dom";
// Components AppRoute
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import FAQ from "./Pages/FAQ"
import Info_404 from "./Pages/Info_404"
import Prices from "./Pages/Prices"
import Services from "./Pages/Services"
import Services_Item from "./Pages/Services_Item";
import Blog_Post from "./Pages/Blog_Post";
import Cart from "./Pages/Cart";

const AppRoute = () => {
  return (
    <Routes>
    {/* COMPONENT AppRoute */}
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Navbar/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Blog" element={<Blog/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Contact" element={<Contact/>}/>     
    <Route path="/FAQ" element={<FAQ/>}/>     
    <Route path="/Prices" element={<Prices/>}/> 
    <Route path="/Cart" element={<Cart/>}/> 
    <Route path="/Services_Item" element={<Services_Item/>}/>  
    <Route path="/Blog_Post" element={<Blog_Post/>}/> 
    <Route path="*" element={<Info_404/>}/>
</Routes>
  )
}

export default AppRoute