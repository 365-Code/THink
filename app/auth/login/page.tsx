import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main className='my-8 flex justify-center items-center'>

        <div className='bg-[#181818] p-8 rounded-lg space-y-4'>

            <div className='flex gap-4'>

                <div className='group/input flex gap-4 bg-[#222222] px-5 py-3 justify-center rounded-lg hover:bg-[#181818] cursor-pointer transition-all'>
                    <i className="fi fi-brands-google text-rose-500 group-hover/input:text-white transition-all" />
                    <span>Log in with Google</span>
                </div>
                <div className='group/input flex gap-4 bg-[#222222] px-5 py-3 justify-center rounded-lg hover:bg-[#181818] cursor-pointer transition-all'>
                    <i className="fi fi-brands-apple text-rose-500 group-hover/input:text-white transition-all" />
                    <span>Log in with Apple</span>
                </div>

            </div>

            <div className='flex gap-2 items-center'>
                <hr className='w-full border-[#f1f1f1]'/>
                <span>OR</span>
                <hr className='w-full border-[#f1f1f1]'/>
            </div>

            <div className='space-y-4'>

                <div className='border focus-within:border-blue-500 flex items-center gap-2 px-2 rounded-lg transition-all'>
                    <i className="fi fi-sr-at" />
                    <input type="email" autoComplete='off' placeholder='Enter Email' className='p-2 w-full bg-transparent' />
                </div>
                <div className='border focus-within:border-blue-500 flex items-center gap-2 px-2 rounded-lg transition-all'>
                    <i className="fi fi-rr-lock" />
                    <input type="password" placeholder='Enter Password' className='p-2 w-full bg-transparent' />
                </div>
                <div className='flex items-center justify-between text-sm p-2'>
                    <div className='flex gap-2 items-center'>
                        <input checked type="checkbox" name="" id="" className='accent-blue-500'/>
                        <span>Remember Me</span>
                    </div>
                    <Link href={'/'} className='text-rose-500'>Forgot Password?</Link>
                </div>

                <button className='p-2 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg w-full'>Sign in</button>
            </div>

            <p className='text-sm text-center p-2'>You haven&apos;t any account?<Link href={'/auth/register'} className='text-rose-500 underline'>Sign up</Link></p>

        </div>


    </main>
  )
}

export default Page