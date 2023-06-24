import React,{useRef} from 'react'
import Header from './Header'
// import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_on0426a', 'template_02twcnq', form.current, '6zzcYvywJH8w813Pj')
  //     .then((result) => {
  //       swal({
  //         title: "Success",
  //         text: "Your message has been sent!",
  //         icon: "success",
  //         dangerMode: 'ok!',
  //       })
  //       window.location.reload('');
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  // ref={form} onSubmit={sendEmail} 

  return (
    
    <div className=''>
      <Header />

      <div className=' w-full h-screen flex justify-center item-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full' action="">
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className=' py-4  text-[#15bba7] '>// Submit the form below or shoot me an email - rautlajesh@gmail.com</p>
          </div>
          <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name=' ' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea name="massage" className='bg-[#ccd6f6]' rows="10" placeholder='message'></textarea>
          <button className='  text-white bg-[#15bba7] px-2 py-2  hover:bg-[#078273]  ease-out duration-700s my-8 mx-auto flex items-center'>Let's collaborate</button>

        </form>
      </div>
    </div>
  )
}

export default Contact