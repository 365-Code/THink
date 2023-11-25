"use client"
import { auth } from '@/utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import {toast} from 'react-toastify'

const Page = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const nav = useRouter();

    const handleChange = (e:any)=>{
        const {name, value} = e.target;
        setCredentials((pCred)=>{
            return {
                ...pCred,
                [name]: value
            }
        })
    }

    const signIn = async (e:any)=>{
        e.preventDefault();

        try {
            const response = await signInWithEmailAndPassword(auth,credentials.email, credentials.password)
            toast.success("Login Successful");
            nav.push('/')

        } catch (error) {
            toast.error("Invalid credentials. Please try again.")
        }

    }


  return (
    <main className='h-screen flex justify-center items-center'>

        <div className='max-w-[95%] bg-[#181818] p-8 rounded-lg space-y-4'>

            <div className='flex sm:flex-row flex-col gap-4'>

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

            <form onSubmit={signIn}>
            <div className='space-y-4'>

                <div className='overflow-hidden border focus-within:border-blue-500 flex items-center gap-1 rounded-lg transition-all'>
                    <i className="fi fi-sr-at px-2" />
                    <input onChange={handleChange} name='email' value={credentials.email} type="email" autoComplete='off' placeholder='Enter Email' className='autofill:!bg-transparent p-2 w-full bg-transparent' />
                </div>
                <div className='overflow-hidden border focus-within:border-blue-500 flex items-center gap-1 rounded-lg transition-all'>
                    <i className="fi fi-rr-lock px-2" />
                    <input onChange={handleChange} name='password' value={credentials.password} type="password" placeholder='Enter Password' className='p-2 w-full bg-transparent' />
                </div>
                <div className='flex sm:flex-row flex-col items-center justify-between text-sm p-2'>
                    <div className='flex gap-2 items-center'>
                        <input defaultChecked type="checkbox" name="" id="" className='accent-blue-500'/>
                        <span>Remember Me</span>
                    </div>
                    <Link href={'/'} className='text-rose-500'>Forgot Password?</Link>
                </div>

                <button type='submit' className='p-2 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg w-full'>Sign in</button>
            </div>
            </form>


            <p className='text-sm text-center p-2'>You haven&apos;t any account?<Link href={'/auth/register'} className='text-rose-500 underline'>Sign up</Link></p>

        </div>


    </main>
  )
}

export default Page