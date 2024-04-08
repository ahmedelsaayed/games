import React from 'react'
import '../Contact/Contact.css'
export const Contact = () => {
    return (
        <div className='con'>
            <div className='shop  mt-5'>
            <h1 className='text-center text-light fs-1 fw-bold '>CONTACT US</h1>            
        </div>
        <div className='row container m-auto my-5'>
            <div className='col-lg-6 col-md-12'>
                <div>
                   <p className='text-danger fw-bolder'>Contact Us</p>
                   <h1>Say Hello!</h1>
                   <p className='ap'>
                   LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.
                    </p> 
                    <p>Adress</p>
                    <p className='ap'>Sunny Isles Beach, FL 33160, United States</p>
                    <p>Phone</p>
                    <p className='ap'>01068762490</p>
                    <p>Email</p>
                    <p className='ap'>Ahmed Elsayed @gmailcom</p>
                </div>
            </div>
            <div className='col-lg-6 col-md-12'>
            <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" 
          title="Example Iframe"
          width="440" 
          height="300" 
          frameBorder="0" 
          allowFullScreen
        />
         <div className='row'>
            <div className='col-lg-6 col-md12'>
                <input  className='inp' type="text" placeholder='Your Name' />
            </div>
            <div className='col-lg-6 col-md12'>
                <input  className='inp'type="text" placeholder='Your Surname' />
            </div>
         </div>
         <div className='row'>
            <div className='col-lg-6 col-md12'>
                <input className='inp' type="text" placeholder='Your Email'  />
            </div>
            <div className='col-lg-6 col-md12'>
                <input  className='inp'type="text" placeholder='Subject'  />
            </div>
         </div>
         <input className='area inp' type="text"  placeholder="Message"/><br/>
         <button className='btn btn-danger text-center m-auto d-flex w-50 text-center '>Submit</button>
            </div>
        </div>
        </div>
    )
}
export default Contact
