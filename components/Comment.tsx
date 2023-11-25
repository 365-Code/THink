import { avatar } from '@/lib'
import Image from 'next/image'
import React from 'react'

const Comment = (clr:{textColor:any}) => {


  return (
    <>
    <div id="comment" className="m-4 max-w-xl flex flex-col items-start gap-2">
      <div className='flex items-end gap-3'>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image width={64} height={64} src={avatar} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <span className={`text-base ${clr.textColor} font-semibold`}>username</span>
      </div>
      <div className="rounded-t-lg overflow-hidden flex-1">
        <p className="px-2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tenetur eum. Itaque a, nemo reiciendis cupiditate sequi in tempora adipisci recusandae molestias, facilis corrupti.
        </p>
      </div>
    </div>
    <hr className='w-4/5 mx-auto' />
    </>

  )
}

export default Comment