import React from 'react'
import Header from './Header'

const Work = () => {
  return (
    <div>
      <Header />
      <div name='skills' className=' h-full w-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >

          <div className='' >
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Word </p>
            <p className='text-[#15bba7] py-4'>//Check out some of  my recent project</p>
          </div>

          <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 '>

            <div >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Aljesh.avif" alt="" />
            </div>
            <div >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Yogesh.avif" alt="" />
            </div>

            <div >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Aljesh.avif" alt="" />
            </div>
            <div >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Yogesh.avif" alt="" />
            </div>
            <div >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Aljesh.avif" alt="" />
            </div>


            <div className='drop-shadow-2xl rounded-lg shadow-2xl hover:scale-110 duration-500' >
              <img className='rounded-lg shadow-2xl hover:scale-110 duration-500' src="./image/Yogesh.avif" alt="" />
            </div>











          </div>
        </div>
      </div>
    </div>

  )
}

export default Work