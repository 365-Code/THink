import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex-1 flex flex-col gap-3 justify-center items-center '>
        <h1 className='text-xl'>Page Under Construction</h1>
        <Link href={'/'} className='py-2 px-3 rounded-lg bg-[#282828] hover:bg-[#181818] transition-all'>Back to Home</Link>
    </div>
  )
}

export default Page