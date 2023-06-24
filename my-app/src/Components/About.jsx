import React from 'react'
import Header from './Header'

const About = () => {
  return (
  <div>
    <Header/>
    <div className='h-full w-screen'>
      
      <div className='flex pt-44 flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-4xl font-'>
              <p className=''>I'm Aljesh,nice to meet you. Please take a look around.</p>
            </div>
              <div className='text-xl  text-[#15bba7]'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae nemo mollitia ex eum culpa illum aut? Magnam similique nesciunt dolorem eos repellendus saepe, necessitatibus non laudantium, fugiat quo illo.</p>
              </div>

            </div>
  </div>
        

      </div>
    </div>
  )
}

export default About