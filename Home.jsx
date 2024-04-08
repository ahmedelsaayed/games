import React from 'react'
import '../Home/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import '../Home/jquery-3.7.1.min.js'
import homerightim from '../../images/banner-image.jpg';
import { TiCloudStorageOutline } from "react-icons/ti";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineReplay } from "react-icons/md";
import 'react-router-dom'
import { BsLayoutTextSidebar } from "react-icons/bs";export const Home = () => {
    window.onscroll=function(){
        if(window.scrollY>0){
            $('.nav-bar').css('position','fixed')
            $('.nav-bar').css('background-color','#0171F9')
            $('.nav-bar').css('border-radius','0px 0px 20px 20px')
        }
        else{
            $('.nav-bar').css('border-radius','0px 0px 0px 0px')
            $('.nav-bar').css('position','static')
            $('.nav-bar').css('background','none')
        }
    }
    return (
        <div className='Home mb-5 '>
            <div className="row m-auto container dd">
                <div className="  home-left col-lg-6 col-md-12">
                    <h1 className='fs-1  text-light'>Welcome to LUGX</h1>
                    <p className='p1'>BEST GAMAING SITE EVER!</p>
                    <p className='p2'>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                    <div className='search'>
                        <input type="text" name="" id="" placeholder='Enter Keywords' />
                        <button>Search</button>
                        </div>                
                </div>
                <div className='col-lg-4  home-right mb-5  mt-4 col-md-6  col-sm-9'>
                    <h2>$22</h2>
                    <h3>-40%</h3>
                    <img src={homerightim} className='img-home img-fluid   w-100 me-0 '  alt=""  />
                </div>
            </div>
            <div className='row  ff m-auto'>
                <div className='col-lg-3 col-md-5'>
                    <div className='home-down'>
                    <TiCloudStorageOutline className='icon' />
                     <h4>FREE STORAGE</h4>
                    </div>
                </div>
                <div className='col-lg-3 col-md-5'>
                    <div className='home-down'>
                    <BsFillPersonFill className='icon' />
                     <h4>USER MORE</h4>
                    </div>
                </div>
                <div className='col-lg-3 col-md-5'>
                    <div className='home-down'>
                    <MdOutlineReplay className='icon' />
                     <h4>REPLY READY</h4>
                    </div>
                </div>
                <div className='col-lg-3 col-md-5'>
                    <div className='home-down'>
                    <BsLayoutTextSidebar className='icon p-0 w-25 border-none fi ' />
                     <h4>EASY LAYOUT</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  Home;