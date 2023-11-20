import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

    <header className="my-container-2 w-screen flex items-center justify-between gap-4">
      <Link href={"/"} className="logo flex items-center gap-2 font-semibold">
        <div className="h-[48px] w-[48px] cursor-pointer overflow-hidden rounded-full">
          {/* <img 
          src="https://img.freepik.com/free-photo/young-woman-abstract-autumn-beauty-nature-generated-by-ai_188544-10645.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated" 
          alt="" 
          className="h-full w-full object-cover object-center" /> */}
          <Image
          width={64}
          height={64} 
          src="https://img.freepik.com/free-photo/young-woman-abstract-autumn-beauty-nature-generated-by-ai_188544-10645.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated" 
          alt="" 
          className="h-full w-full object-cover object-center" />
        </div>

        <span>THink</span>
      </Link>

      <nav className="hidden flex-wrap items-center gap-8 md:flex">
        <a href="/" className='hover-glow-text'>Home</a>
        <a href="/blogs" className='hover-glow-text'>Blogs</a>
        <a href="/:user/my-blogs" className='hover-glow-text'>My Blogs</a>
        <a href="/about" className='hover-glow-text'>About</a>
      </nav>

      <div className='rounded-full space-x-2 flex'>
        <button className='hover:text-[#121212] border hover:bg-white text-white transition-all px-4 py-2 rounded-full'>Log In</button>
        <button className='text-[#121212] bg-white transition-all px-4 py-2 rounded-full'>Sign Up</button>
      </div>
      <div className="hidden items-center gap-4">

        <div id="profile" className="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full">
          {/* <img src="https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg" alt="" className="h-full w-full object-cover object-center" /> */}
          <Image width={64} height={64} src="https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg" alt="" className="h-full w-full object-cover object-center" />
        </div>

        <div className='cursor-pointer'>
          <i id='fi' className="fi fi-sr-bell text-slate-200 hover:text-slate-300" />
        </div>

        <Link href={"/#contact"} className="hidden sm:block rounded-full bg-white hover:bg-[#121212] hover:text-white transition-all px-2 py-1 text-slate-600">Contact Us</Link>

      </div>

    </header>
  )
}

export default Header