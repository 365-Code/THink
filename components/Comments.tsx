import React from 'react'
import AddComment from './AddComment'
import Comment from './Comment'
import { clrs, clrsLength } from '@/lib'

const Comments = () => {
  return (
    <div className='border-l flex-1 flex flex-col gap-4 max-h-screen'>

        <h3 className='text-center mb-1 font-semibold underline'>Comments</h3>

        <div className='flex-1 overflow-y-scroll custom-scrollbar'>
          {
            [1,2,3,4,5].map((i, ind)=>(
              <Comment key={i} textColor={clrs[Math.round(Math.random()*(clrsLength-1))]?.text}/>
            ))
          }
        </div>


        <AddComment/>

    </div>
  )
}

export default Comments