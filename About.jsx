import React from 'react'
import im from '../../images/cta-bg.jpg'
import'../About/About.css'
export const About = () => {
    return (
        <div className='About w-100 container m-auto mt-5 '>
            <img src={im} alt="" className='w img-fluid m-auto' srcset="" />
            <div className='A1'>
                <p className='ms-4 fw-bold text-danger'>our shop</p>
                <h1  className='ms-4 fs-2 lh-1.5 fw-bold'>Go Pre-Order Buy & Get Best <span className='text-primary'>Prices</span>  For You!</h1>
                <p  className='ms-4 my-2 text-muted'>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                <button className='btn w-50 m-auto mt-2 mb-1 btn-danger'>Shop Now</button>
            </div>
            <div className='A2'>
                <p className='ms-4 fw-bold text-danger'>NEWSLETTER</p>
                <h1  className='ms-4 fs-4 fw-bold'>Get Up To $100 Off Just Buy <span className='text-primary'>Subscribe</span> Newsletter!</h1>
                <div className="email">
                    <input className='in' type="text" name="" placeholder='Email' id="" />
                    <button className='btn btn-danger'>Send</button>
                </div>
                
            </div>
        </div>
    )
}
export default About;
