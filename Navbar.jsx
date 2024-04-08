import React, { useState } from 'react'
import '../../components/Navbar/Navbar.css'
import logo from '../../images/logo.png'
import  {Link} from 'react-router-dom'
import Home from '../Home/Home.jsx'
import Trainding from '../Home/trainding/Trainding.jsx'
import Category from '../category/Category.jsx'
import Top from '../top games/Top.jsx'
import About from '../About/About.jsx'
import Product from '../Product/Product.jsx'
import Contact from '../Contact/Contact.jsx'
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
export const Navbar = () => {
    window.onscroll=function(){
        if(window.scrollY>0){
            $('.nav-bar').css('position','sticky').css('top','0')
            $('.nav-bar').css('background-color','#0171F9')
            $('.nav-bar').css('border-radius','0px 0px 20px 20px')
        }
        else{
            $('.nav-bar').css('border-radius','0px 0px 0px 0px')
            // $('.nav-bar').css('position','relative')
            $('.nav-bar').css('background','none')
        }
    }
    function menue(){
      $('.nav-right').addClass('mme')
      $('.nav-bar .me').css('display','none')  
      $('.nav-bar .cl').css('display','block')  
      $('.nav-right').removeClass('cll')
    }
    function close(){
      $('.nav-right').addClass('cll')
      $('.nav-right').removeClass('mme')
      $('.nav-bar .me').css('display','block')  
      $('.nav-bar .cl').css('display','none')  
    }
    function hide(){
        $('.Home').css('display','none')
        $('.trainding').css('display','none')
        $('.top').css('display','none')
        $('.About').css('display','none')
        $('.CATEGORIES').css('display','none')
        $('.link1').removeClass('a1')
        $('.link2').addClass('a1')
        $('.link3').removeClass('a1')
        $('.link4').removeClass('a1')
    }
    function hidep(){
        $('.Home').css('display','none')
        $('.trainding').css('display','none')
        $('.top').css('display','none')
        $('.About').css('display','none')
        $('.CATEGORIES').css('display','none')
        $('.link1').removeClass('a1')
        $('.link2').removeClass('a1')
        $('.link4').removeClass('a1')
        $('.link3').addClass('a1')
    }
    function hidec(){
        $('.Home').css('display','none')
        $('.trainding').css('display','none')
        $('.top').css('display','none')
        $('.About').css('display','none')
        $('.CATEGORIES').css('display','none')
        $('.link1').removeClass('a1')
        $('.link2').removeClass('a1')
        $('.link3').removeClass('a1')
        $('.link4').addClass('a1')
    }
    function show(){
        $('.Home').css('display','block')
        $('.trainding').css('display','block')
        $('.top').css('display','block')
        $('.About').css('display','flex')
        $('.CATEGORIES').css('display','block')
        $('.link1').addClass('a1')
        $('.link2').removeClass('a1')
        $('.link3').removeClass('a1')
        $('.link4').removeClass('a1')
    }
    return (
            <>
        <nav className='nav-bar w-100 d-flex '>
        <img className='nav-left' src={logo} alt="Logo" />
        <ul className='nav-right'>
            <li>< Link onClick={show} className='link1'  to="/" >Home</Link></li>
            <li><Link onClick={hide}   className='link2' to="/Shop">Our Shop</Link></li>
            <li><Link onClick={hidep}  className='link3' to="/product">Product Details</Link></li>
            <li><Link className='link4' onClick={hidec} to="/Contact">Contact Us</Link></li>
        </ul>
        <FaBars onClick={menue} className='me-5 me fs-4 text-light  ' />
        <AiOutlineClose onClick={close} className='me-5 cl fs-4 text-light  ' />
        </nav>
        </>

    )
}
export default Navbar