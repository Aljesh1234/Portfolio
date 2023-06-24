import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='w-full h-full flex '>
      
        
      <div className=' pt-44 max-w-[1000px] mx-auto  px-8 flex flex-col justify-center'>
          <p className='text-pink-600 text-xl font-medium'>Hi,My Name is </p>
          <h1 className=' font-bold text-4xl text-gray-700 '>Aljesh Raut</h1>
          <h2 className='text-5xl font-bold text-gray-700'>I'm front-end developer</h2>
          <p className='pt-1 max-w-lg text- text-xl  '>I consider my self a responsible, self motivated and hardworking person. Quick learner and interested on learning and collecting new skills too. Good at communication.</p>

          <div className='pt-4'>
          <button className=' rounded-md text-white bg-[#15bba7] px-2 py-2  hover:bg-[#078273]  ease-out duration-100'>View more</button>
          </div>
      </div>
     <div>
     </div>

  </div>
    </div>
  )
}

export default Home