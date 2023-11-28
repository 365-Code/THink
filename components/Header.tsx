"use client"
import { avatar, logo } from '@/lib'
import { auth } from '@/utils/firebase'
import { authSignIn, authSignOut } from '@/utils/redux/features/authSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'

const Header = () => {

  const pathname = usePathname();

  const [authUser, setAuthUser] = useState({
    _id: null
  });
  const dispatch = useDispatch();

  const fetchUser = async (email: string)=>{
    try{
      const response = await fetch('/api/users/fetchUser', {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },
          body:  JSON.stringify({email})
      })
      const res = await response.json()
      if(res.success){
        dispatch(authSignIn(res.user))
        setAuthUser(res.user)
      }
    } catch(error:any){
      toast.error("Invalid Credentials")
    }
  }

  
  useEffect(() => {
    
    onAuthStateChanged(auth, (user:any)=>{
      if(user){
        // setAuthUser(user)
        fetchUser(user.email)
        } else {
          setAuthUser({_id: null}); 
          dispatch(authSignOut())
        }
      })
  
  }, [])

  const logOut = async ()=>{
    try {
      await signOut(auth)
      dispatch(authSignOut())
      setAuthUser({_id: null})
      toast.success("Logged Out Successfully")
      
    } catch (error) {
      toast.error("Error occurred")
    }
  }

  return (
  <>
    {
      ((pathname !== '/auth/login') && (pathname !== '/auth/register') ) &&
      <header className="z-[2] my-container-2 w-screen flex items-center justify-between gap-4">
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
        <Link href={`/${authUser._id}/my-blogs`} className={`${pathname.endsWith('/my-blogs') && "glow-text"} hover-glow-text`}>My Blogs</Link>
        {/* <Link href="/:user/create-blog" className={`${pathname.endsWith('/my-blogs') && "glow-text"} hover-glow-text`}>create blog</Link> */}
        <Link href="/about" className={`${pathname == '/about' && "glow-text"} hover-glow-text`}>About</Link>
      </nav>

      {
        !(authUser._id)
        ?
        <div className='rounded-full space-x-2 flex'>
          <Link href={'/auth/login'} className='hover:text-[#121212] border hover:bg-white text-white transition-all px-4 py-1 rounded-full'>Log In</Link>
          <Link href={'/auth/register'} className='text-[#121212] bg-white transition-all px-4 py-1 rounded-full'>Sign Up</Link>
        </div>
        :
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer group/dropdown transition-all rounded-lg bg-[#222222] w-fit p-1">
              <div id="profile" className="h-[36px] w-[36px] cursor-pointer overflow-hidden rounded-full">
                <Image width={64} height={64} src={avatar} alt="" className="h-full w-full object-cover object-center" />
              </div>
              <ul className="overflow-hidden h-0 rounded-lg group-hover/dropdown:h-auto absolute top-[102%] right-0 bg-[#222222] text-white transition-all">
                  <li>
                      <Link href={'/user/profile'} className="px-8 py-2 hover:bg-[#181818] transition-all flex items-center gap-2">
                      <i className="fi fi-sr-user-gear" />
                        <span>Profile</span>
                      </Link>
                  </li>
                  <hr />
                  <li>
                    <button onClick={logOut} className='px-8 py-2 hover:bg-[#181818] transition-all flex items-center gap-2'>
                    <i className="fi fi-sr-exit" />
                    <span>Logout</span>
                    </button>
                  </li>
              </ul>
          </div> 

          <div className='cursor-pointer'>
            <i className="fi fi-sr-bell text-slate-200 hover:text-slate-300" />
          </div>
          {/* <button onClick={logOut} className='cursor-pointer p-2 border rounded-full hover:bg-white group/logout transition-all'>
            <i className="fi fi-rr-sign-out-alt group-hover/logout:text-[#121212] transition-all" />
          </button> */}

          {/* <Link href={"/#contact"} className="hidden sm:block rounded-full bg-white hover:bg-[#121212] hover:text-white transition-all px-2 py-1 text-slate-600">Contact Us</Link> */}

        </div>
      }

    </header>
  }
  </>
  )
}

export default Header