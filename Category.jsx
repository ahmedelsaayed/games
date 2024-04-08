import React from 'react'
import catim1 from '../../images/categories-01.jpg'
import catim2 from '../../images/categories-02.jpg'
import catim3 from '../../images/categories-03.jpg'
import catim4 from '../../images/categories-04.jpg'
import '../category/Category.css'

export const Category = () => {
    return (
        <div className='CATEGORIES mt-5'>
            <h1 className='text-danger fs-5 text-center'>CATEGORIES</h1>
            <h1 className='text-center fs-1 ca text-dark'>TOP CATEGORIES</h1>
            <div className='row container mt-5 m-auto'>
                <div className='col-lg-3 col-md-6'>
                    <div className='cat pt-2'>
                        <h4 className='text-center text-white'>Action</h4>
                        <img src={catim1} className='img-fluid  w-100' alt="" srcset="" />
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='cat pt-2'>
                        <h4 className='text-center text-white'>Action</h4>
                        <img src={catim2} className='img-fluid  w-100' alt="" srcset="" />
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='cat pt-2'>
                        <h4 className='text-center text-white'>Action</h4>
                        <img src={catim3} className='img-fluid  w-100' alt="" srcset="" />
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='cat pt-2'>
                        <h4 className='text-center text-white'>Action</h4>
                        <img src={catim4} className='img-fluid  w-100' alt="" srcset="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Category;
