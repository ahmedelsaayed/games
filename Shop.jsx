import React from 'react'
import '../Shop/Shop.css'
import shopim1 from '../../images/top-game-01.jpg'
import shopim2 from '../../images/top-game-02.jpg'
import shopim3 from '../../images/top-game-03.jpg'
import shopim4 from '../../images/top-game-04.jpg'
import shopim5 from '../../images/top-game-05.jpg'
import shopim6 from '../../images/top-game-06.jpg'
import { BsBagFill } from "react-icons/bs";
import Home from '../Home/Home.jsx'
import Trainding from '../Home/trainding/Trainding.jsx'
import Category from '../category/Category.jsx'
import Top from '../top games/Top.jsx'
import About from '../About/About.jsx'
import '../Shop/jquery-3.7.1.min.js'
export const Shop = () => {
    function Adventure(){
            $('.one').fadeOut();
            $('.two').fadeOut();
            $('.three').fadeOut();
            $('.four').fadeOut();
            $('.fife').fadeOut();
            $('.six').fadeOut();
            $('.seven').fadeIn();
            $('.eiaht').fadeIn();
            $('.nine').fadeIn();
            $('.ten').fadeOut();
            $('.eleven ').fadeIn();
            $('.twelve').fadeIn();
    }
    function stratigy(){
            $('.one').fadeIn();
            $('.two').fadeIn();
            $('.three').fadeIn();
            $('.four').fadeIn();
            $('.fife').fadeIn();
            $('.six').fadeIn();
            $('.seven').fadeOut();
            $('.eiaht').fadeOut();
            $('.nine').fadeOut();
            $('.ten').fadeOut();
            $('.eleven ').fadeOut();
            $('.twelve').fadeOut();
    }
    function racing(){
            $('.one').fadeOut();
            $('.two').fadeOut();
            $('.three').fadeOut();
            $('.four').fadeIn();
            $('.fife').fadeIn();
            $('.six').fadeIn();
            $('.seven').fadeOut();
            $('.eiaht').fadeIn();
            $('.nine').fadeIn();
            $('.ten').fadeOut();
            $('.eleven ').fadeOut();
            $('.twelve').fadeIn();
    }
    function All(){
            $('.one').fadeIn();
            $('.two').fadeIn();
            $('.three').fadeIn();
            $('.four').fadeIn();
            $('.fife').fadeIn();
            $('.six').fadeIn();
            $('.seven').fadeIn();
            $('.eiaht').fadeIn();
            $('.nine').fadeIn();
            $('.ten').fadeIn();
            $('.eleven ').fadeIn();
            $('.twelve').fadeIn();
    }

    return (
        <div>
        <div className='shop  mt-5'>
            <h1 className='text-center fs-1 fw-bold text-light'>Our Shop</h1>            
        </div>
        <div className='buttons text-center mt-5 d-flex'>
            <button onClick={All}  className='btn btn-light'>Show All</button>
            <button onClick={Adventure} className='btn btn-light'>Adventure</button>
            <button onClick={stratigy} className='btn btn-light'>Strategy</button>
            <button onClick={racing} className='btn btn-light'>Racing</button>
        </div>
        <div className="row container mb-5  mt-5 m-auto">
                <div  className='col-lg-3 one col-md-6'>
                    <div className='game1' >
                        <img src={shopim1} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 two col-md-6'>
                    <div className='game1' >
                        <img src={shopim2} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 three col-md-6'>
                    <div className='game1' >
                        <img src={shopim3} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 four col-md-6'>
                    <div className='game1' >
                        <img src={shopim4} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 fife'>
                    <div className='game1' >
                        <img src={shopim5} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 six'>
                    <div className='game1' >
                        <img src={shopim6} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 seven'>
                    <div className='game1' >
                        <img src={shopim4} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 eiaht'>
                    <div className='game1' >
                        <img src={shopim3} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 nine'>
                    <div className='game1' >
                        <img src={shopim1} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 ten'>
                    <div className='game1' >
                        <img src={shopim3} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 eleven'>
                    <div className='game1' >
                        <img src={shopim5} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Action</p>
                        <div className=' cart'>
                            <h1 className='fs-5 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <BsBagFill className='bag ms-0 mt-0 fs-3' />
                        </div>
                    </div>
                </div>
                <div  className='col-lg-3 col-md-6 twelve'>
                    <div className='game1' >
                        <img src={shopim2} className=' w-100 ' alt="" srcset="" />
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
export default  Shop;