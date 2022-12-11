import React from 'react';

const Contact = () => {
    return (
        <div className='py-20'>
            <h3 className='sub-heading'>Get In Touch</h3>
    <h1 className='heading'>If you have any porject or need help. Contact Me</h1>

    <div className='grid grid-cols-1 md:grid cols-2 lg:grid-cols-3 gap-x-10 my-10'>
        <div className='bg-base-100 p-5 text-center text-white rounded'>
            <h6 className='font-bold mb-2 text-xl'>Email: </h6>
            <p>noyon.podder7@gmail.com</p>
        </div>
        <div className='bg-base-100 p-5 text-center text-white rounded'>
            <h6 className='font-bold mb-2 text-xl'>Phone: </h6>
            <p>+880 1752441505</p>
        </div>
        <div className='bg-base-100 p-5 text-center text-white rounded'>
            <h6 className='font-bold mb-2 text-xl'>Address: </h6>
            <p>Kushtia, Bangladesh</p>
        </div>
    </div>           

<div className="hero">
  <div className="hero-content w-full">
    
    <div className="card  w-full">
      <form action="https://formsubmit.co/noyon.podder7@gmail.com"
            method="POST" 
            className="">
      <div className="form-control mb-6">
          <input type="text" placeholder="Enter Your Name" className="input input-bordered text-white text-xl p-4 inline-block h-16" name='name' required/>
        </div>
        <div className="form-control mb-6">        
          <input type="text" placeholder="Enter Your Email" className="input h-16 input-bordered text-white text-xl p-4 inline-block" name='email' required/>
        </div>
        <div className="form-control mb-6">         
          <input type="text" placeholder="Enter Your subject" className="input input-bordered text-white text-xl p-4 inline-block h-16" name='subject' required/>
        </div>
        <div className="form-control mb-6">
        <textarea className="textarea textarea-bordered h-72 text-xl text-white" placeholder="Message" name='message' required></textarea>
        </div>
        <button className="btn px-10 btn-warning btn-xl ">Send Message</button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;