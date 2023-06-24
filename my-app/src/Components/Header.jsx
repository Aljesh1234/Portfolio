import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import {Link} from "react-router-dom"


const Header = () => {
  const[Header,setHeader] = useState(false)
  const handleClick = () => setHeader(!Header)
  return (

 <div class='px-8 shadow-xl h-full w-full'>
  <nav class='top-0  w-full'>
    <div class=' mx-auto py-5 flex items-center justify-between container'>
    <div class='text-2xl font-medium'><h1 className='font-serif'>Aljesh</h1>Portfolio</div>
    <ul class='flex space-x-10'>

      <Link to="/">
      <li class='hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1  '>
        Home
        </li>
      </Link>

      <Link to="/about">
      <li class='hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1' >About</li>
      </Link>

      <Link to="/work">
      <li class='hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1' >Work</li>
      </Link>

      <Link to ="/experience">
      <li class='hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1' >Experience</li>
      </Link>
      <Link to ="/contact">

      <li class='hover:bg-[rgb(56,206,189)] rounded-md ease-in duration-100 hover:text-white px-1 py-1' > Contact</li>
      </Link>
          
    </ul>
    <span class='rounded-md text-white bg-[#15bba7] px-2 py-2  hover:bg-[#078273]  ease-out duration-100 ' >Sign up</span>
    {/* <span>4</span> */}
    </div>
  </nav>

  <div></div>

 </div>
  )
}

export default Header