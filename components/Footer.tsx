import React from 'react'

const Footer = () => {
    return (

        <footer className="my-container-1 relative flex items-center justify-between flex-col-reverse gap-4">
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
                <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
                    <img 
                    src="https://img.freepik.com/free-photo/young-woman-abstract-autumn-beauty-nature-generated-by-ai_188544-10645.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated"
                    alt="" 
                    className="h-full w-full object-cover object-center" />
                </div>
                <span>THink</span>
            </div>

            <p className="text-sm">&copy;2023. All right reserved.</p>
        </footer>

    )
}

export default Footer