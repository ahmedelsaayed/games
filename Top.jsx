import React from 'react'
import topim1 from '../../images/top-game-01.jpg'
import topim2 from '../../images/top-game-02.jpg'
import topim3 from '../../images/top-game-03.jpg'
import topim4 from '../../images/top-game-04.jpg'
import topim5 from '../../images/top-game-05.jpg'
import topim6 from '../../images/top-game-06.jpg'
import { BsBagFill } from "react-icons/bs";
import '../top games/Top.css';
export const Top = () => {
    return (
        <div className='top container m-auto'>
            <p className='text-danger ms-5 fs-5 fw-bold'>TOP GAMES</p>
            <h1 className='ms-5 d-flex '>Most Played <button className='btn btn-danger ms-5'>view All</button></h1>  
            <div className="row container mb-5  mt-5 m-auto">
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim1} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                             <button className='btn btn-danger'>Explore</button>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim2} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <button className='btn btn-danger'>Explore</button>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim3} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <button className='btn btn-danger'>Explore</button>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim4} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <button className='btn btn-danger'>Explore</button>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim5} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <button className='btn btn-danger'>Explore</button>
                        </div>
                    </div>
                </div>
                <div  className='col-lg-2 col-md-6'>
                    <div className='game1' >
                        <img src={topim6} className=' w-100 ' alt="" srcset="" />
                        <p className='mt-2 ms-2 mb-1 text-muted'>Adventure</p>
                        <div className=' cart'>
                            <h1 className='fs-6 mb-2 ms-2 mt-0'>Assasin Creed</h1>
                            <button className='btn btn-danger'>Explore</button>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top;
