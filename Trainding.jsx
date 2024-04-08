import React from 'react'
import '../trainding/Trainding.css'
import tradeim1 from '../../../images/top-game-01.jpg'
import tradeim2 from '../../../images/top-game-02.jpg'
import tradeim3 from '../../../images/top-game-03.jpg'
import tradeim4 from '../../../images/top-game-04.jpg'
import { BsBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import Home from '../Home'
import Top from '../../top games/Top'
import Category from '../../category/Category'
import About from '../../About/About'
export const Trainding = () => {
    function hide(){
        $('.Home').css('display','none')
        $('.trainding').css('display','none')
        $('.top').css('display','none')
        $('.About').css('display','none')
        $('.CATEGORIES').css('display','none')
    }
    return (
        <div className='trainding  mt-5'>
            <p className='text-danger pp ms-5 fs-5 fw-bold'>trainding</p>
            <h1 className='ms-5 d-flex h '>Trending Games <Link  onClick={hide} to='/Shop' className='btn ll btn-danger ms-5'>view All</Link></h1>
            <div className="row container mb-5  mt-5 m-auto">
                <div  className='col-lg-3 col-md-6'>
                    <div className='game1' >
                        <img src={tradeim1} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6'>
                    <div className='game1' >
                        <img src={tradeim2} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6'>
                    <div className='game1' >
                        <img src={tradeim3} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-5' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6'>
                    <div className='game1' >
                        <img src={tradeim4} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainding;