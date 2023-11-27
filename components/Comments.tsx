import React, { useEffect, useState } from 'react'
import AddComment from './AddComment'
import Comment from './Comment'
import { clrs, clrsLength } from '@/lib'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Comments = (props: {comments: any}) => {

  const [comments, setComments] = useState([])

  const authUser = useSelector((state: any) => state.authReducer.auth)

  useEffect(()=>{
    setComments(props.comments)
  }, [props.comments])


  return (
    <div className='border-l flex-1 flex flex-col gap-4 max-h-screen'>

        <h3 className='text-center mb-1 font-semibold underline'>Comments</h3>
        {
          <div className='flex-1 overflow-y-scroll custom-scrollbar scroll-smooth transition-all'>
            {
              comments?.map((c:any, ind:number)=>(
                <Comment key={c} comment={c} textColor={(clrs[ind%clrsLength].text)}/>
              ))
            }
          </div>
        }
        {
          authUser.user
          ?
          <AddComment comments={comments} setComments={setComments}/>
          :
          <div className='text-center'>
            {/* <hr className='w-4/5 mx-auto'/> */}
            <Link href="/auth/login" className='hover:text-blue-500 transition-all text-center py-4'>Login to access</Link>
          </div>
        }

    </div>
  )
}

export default Comments