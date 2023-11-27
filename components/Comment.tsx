
import Image from 'next/image'
import React from 'react'

const Comment = (cmt:{comment:any, textColor:string}) => {


  return (
    <>
    <div id="comment" className="m-4 max-w-xl flex flex-col items-start gap-2">
      <div className='flex items-end gap-3'>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image width={64} height={64} src={cmt.comment.profile} alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className={`font-semibold flex flex-col leading-3 ${cmt.textColor}`}>
          <span>{cmt.comment.username}</span>
          <span className='text-xs text-gray-400'>{cmt.comment.email}</span>
        </div>
      </div>
      <div className="rounded-t-lg overflow-hidden flex-1">
        <p className="px-2 w-full">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tenetur eum. Itaque a, nemo reiciendis cupiditate sequi in tempora adipisci recusandae molestias, facilis corrupti. */}
            {cmt.comment.comment}
        </p>
      </div>
    </div>
    <hr className='w-4/5 mx-auto' />
    </>

  )
}

export default Comment