import React from 'react'
import Header from './Header'

const Experience = () => {
    return (

        <div name='skills' className=' h-full w-screen'>
            <Header/>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >

                <div className='' >
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience </p>
                    <p className=' text-[#15bba7] py-4'>//These are the technologies I've worked with</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/HTML.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>HTML</p>
                    </div>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/Css.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>CSS</p>
                    </div>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/JavaScript.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>JAVASCRIPT</p>
                    </div>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/figma.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>FIGMA</p>
                    </div>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/Github.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>GITHUB</p>
                    </div>
                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-32 mx-auto' src="./image/Scss.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>SCSS</p>
                    </div>

                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/HTML.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>HTML</p>
                    </div>

                    <div className=' shadow-2xl hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src="./image/Css.png" alt="" />
                        <p className='my-4 font-semibold text-[rgb(56,206,189)]'>CSS</p>
                    </div>



                </div>
            </div>
        </div>

    )
}

export default Experience