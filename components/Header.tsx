"use client"
import { avatar, logo } from '@/lib'
import { auth } from '@/utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {useEffect, useState} from 'react'
import {toast} from 'react-toastify'

const Header = () => {

  const pathname = usePathname();

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {

      onAuthStateChanged(auth, (user:any)=>{
        user ? setAuthUser(user) : setAuthUser(null); 
      })
  
  }, [])

  const logOut = async ()=>{
    try {
      await signOut(auth)
      toast.success("Logged Out Successfully")
      
    } catch (error) {
      // console.log(error)
      toast.error("Error occurred")
    }
  }
  
  return (
  <>
    {
      ((pathname !== '/auth/login') && (pathname !== '/auth/register') ) &&
      <header className="my-container-2 w-screen flex items-center justify-between gap-4">
      <Link href={"/"} className="logo flex items-center gap-2 font-semibold">
        <div className="h-[48px] w-[48px] cursor-pointer overflow-hidden rounded-full">
          <Image
          width={64}
          height={64} 
          src={logo} 
          alt="" 
          className="h-full w-full object-cover object-center" />
        </div>

        <span>THink</span>
      </Link>

      <nav className="hidden flex-wrap items-center gap-8 md:flex">
        <Link href="/" className={`${pathname == '/' && "glow-text"} hover-glow-text`}>Home</Link>
        <Link href="/blogs" className={`${pathname == '/blogs' && "glow-text"} hover-glow-text`}>Blogs</Link>
        <Link href="/:user/my-blogs" className={`${pathname.endsWith('/my-blogs') && "glow-text"} hover-glow-text`}>My Blogs</Link>
        {/* <Link href="/:user/create-blog" className={`${pathname.endsWith('/my-blogs') && "glow-text"} hover-glow-text`}>create blog</Link> */}
        <Link href="/about" className={`${pathname == '/about' && "glow-text"} hover-glow-text`}>About</Link>
      </nav>

      {
        !authUser 
        ?
        <div className='rounded-full space-x-2 flex'>
          <Link href={'/auth/login'} className='hover:text-[#121212] border hover:bg-white text-white transition-all px-4 py-1 rounded-full'>Log In</Link>
          <Link href={'/auth/register'} className='text-[#121212] bg-white transition-all px-4 py-1 rounded-full'>Sign Up</Link>
        </div>
        :
        <div className="flex items-center gap-4">

          <div id="profile" className="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full">
            <Image width={64} height={64} src={avatar} alt="" className="h-full w-full object-cover object-center" />
          </div>

          <div className='cursor-pointer'>
            <i className="fi fi-sr-bell text-slate-200 hover:text-slate-300" />
          </div>
          <button onClick={logOut} className='cursor-pointer p-2 border rounded-full hover:bg-white group/logout transition-all'>
            <i className="fi fi-rr-sign-out-alt group-hover/logout:text-[#121212] transition-all" />
          </button>

          <Link href={"/#contact"} className="hidden sm:block rounded-full bg-white hover:bg-[#121212] hover:text-white transition-all px-2 py-1 text-slate-600">Contact Us</Link>

        </div>
      }

    </header>
  }
  </>
  )
}

export default Header