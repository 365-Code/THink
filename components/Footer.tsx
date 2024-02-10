"use client"
import { logo } from '@/lib'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {
  const pathname = usePathname();

    return (
        <>
        {
            ((pathname !== '/auth/login') && (pathname !== '/auth/register') ) &&

        <footer className="my-container-1 relative flex items-center justify-between justify-self-end flex-col-reverse gap-4">
            <div className="flex items-center gap-4 ">
                <a href="/" className='hover:text-rose-500'>Home</a>
                <hr className='h-6 border-none w-[2px] bg-red-500'/>
                <a href="/blogs" className='hover:text-rose-500'>Blogs</a>
                <hr className='h-6 border-none w-[2px] bg-red-500'/>
                <a href="/about" className='hover:text-rose-500'>About</a>
                <hr className='h-6 border-none w-[2px] bg-red-500'/>
                <a href="/:user/account" className='hover:text-rose-500'>Account</a>
            </div>

            <div className="logo flex items-center gap-2 font-semibold text-lg">
                <div className="h-[64px] w-[64px] overflow-hidden rounded-full">
                    <Image
                    width={64}
                    height={64} 
                    src="/logo.png"
                    alt="" 
                    className="h-full w-full object-cover object-center" />
                </div>
                <span>THink</span>
            </div>

            <p className="text-sm">&copy;2023. All right reserved.</p>
        </footer>
        }


        </>

    )
}

export default Footer