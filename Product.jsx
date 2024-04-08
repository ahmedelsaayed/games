import React from 'react'
import '../Product/Product.css'
import im from '../../images/single-game.jpg'
import { BsBagFill } from "react-icons/bs";
import Trainding from '../Home/trainding/Trainding';
export const Product = () => {
    function desc(){
        document.querySelector('.re').style.display='none'; 
        document.querySelector('.re2').style.display='none'; 
        document.querySelector('.de').style.display='block'; 
        document.querySelector('.de2').style.display='block';
    }
    function review(){
        document.querySelector('.de').style.display='none'; 
        document.querySelector('.de2').style.display='none'; 
        document.querySelector('.re').style.display='block'; 
        document.querySelector('.re2').style.display='block';
        
    }
    return (
        <div>
            <div className='shop  mt-5'>
            <h1 className='text-center  fs-1 fw-bold text-light'>MODERN WARFARE® II</h1>            
        </div>
        <div className='row container m-auto my-5'>
            <div className="col-lg-5 imm col-md-12">
                <img src={im} className='img-fluid' alt="" />
            </div>
            <div className="col-lg-7 mt-2 col-md-12">
                <div className='dee'>
                    <h1 className='fs-2 hb w-100'>Call of Duty®: Modern Warfare® II</h1>
                    <h4 className='text-primary  ms-1 mt-4 mb-4'><span className=' me-2 fs-5 '> <del>$28</del></span>$22</h4>
                    <p className='h44 w-75'>LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.</p>
                    <div className='addcart'>
                        <input className='btn btn-outline-info text-dark' value={1} type="text" />
                        <button className='btn btn-danger'> <BsBagFill/>Add To Cart</button>
                    </div>
                    <div className='pro'>
                        <p>Game id</p>
                        <a href="">COD MMii</a>
                    </div>
                    <div className='pro'>
                        <p>Genre</p>
                        <a href="">Action, team , Single</a>
                    </div>
                    <div className='pro'>
                        <p>Multi-tags:</p>
                        <a href="">War, Battle, Royal</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="dec p-2 mb-4 container m-auto ">
            <div className='d-flex jutify-content-start align-items-center'>
                <button onClick={desc} className='btn text-primary fw-bold'>Description</button>
                <h1 className='text-muted mt-2 fs-4'>|</h1>
                <button onClick={review} className='btn text-primary fw-bold'>Review (3) </button>
            </div>
            <p className='text-muted  de lh-1.5 ms-2 mt-1 '>You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.</p>
            <p className='text-muted de2 lh-1.5 ms-2 mt-1 mb-5'>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
            <p className='text-muted  re lh-1.5 ms-2 mt-1 '>Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.</p>
            <p className='text-muted re2  lh-1.5 ms-2 mt-1 mb-5'>Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.</p>
        </div>
        <Trainding/>
        </div>
    )
}
export default Product
