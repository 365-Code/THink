"use client"
import { auth } from '@/utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import {useState} from 'react'
import {toast} from 'react-toastify'

const Page = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e:any)=>{
        const {name, value} = e.target;
        setCredentials((pCred)=>{
            return {
                ...pCred,
                [name]: value
            }
        })
    }

    const nav = useRouter();

    const signUp = async (e:any)=>{
        e.preventDefault();
        try{
            const response = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            toast.success("Registered Successfully")

            nav.push("/auth/login")
        }catch(error:any){
            // console.log(error)
            const {code} = error
            toast.error(code)
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

            <form onSubmit={signUp}>
            <div className='space-y-4'>
                <div className='overflow-hidden border focus-within:border-blue-500 flex items-center gap-1 px-2 rounded-lg transition-all'>
                    <i className="fi fi-sr-user px-2" />
                    <input onChange={handleChange} name='username' value={credentials.username} type="text" autoComplete='off' placeholder='Enter Username' className='autofill:!bg-transparent p-2 w-full bg-transparent' />
                </div>

                <div className='overflow-hidden border focus-within:border-blue-500 flex items-center gap-1 px-2 rounded-lg transition-all'>
                    <i className="fi fi-sr-at px-2" />
                    <input onChange={handleChange} name='email' value={credentials.email} type="email" autoComplete='off' placeholder='Enter Email' className='p-2 w-full bg-transparent' />
                </div>

                <div className='overflow-hidden border focus-within:border-blue-500 flex items-center gap-1 px-2 rounded-lg transition-all'>
                    <i className="fi fi-rr-lock px-2" />
                    <input onChange={handleChange} name='password' value={credentials.password} type="password" placeholder='Enter Password' className='p-2 w-full bg-transparent' />
                </div>

                <div className='flex gap-2 items-center text-sm'>
                    <input defaultChecked type="checkbox" name="" id="" className='accent-blue-500'/>
                    <span>Remember Me</span>
                </div>

                <button type='submit' className='p-2 font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg w-full'>Sign up</button>
            </div>
            </form>

            <p className='text-sm text-center p-2'>Already Registered? <Link href={'/auth/login'} className='text-rose-500 underline'>Sign in</Link></p>

        </div>


    </main>
  )
}

export default Page