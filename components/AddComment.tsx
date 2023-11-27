"use client"
import { avatar } from '@/lib'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const AddComment = (cmt:{comments: any, setComments:any}) => {

  const authUser = useSelector((state: any) => state.authReducer.auth)
  const [commentData, setCommentData] = useState({
    comment: ''
  })

  const {blogId: bId} = useParams()

  const postComment = async ()=>{
    const cmtData = {
      ...commentData,
      profile: authUser.user.profile || avatar,
      username: authUser.user.username,
      email: authUser.user.email,
    }

    try{
      const response = await fetch (`/api/blogs/addComment/?bId=${bId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(cmtData)
      })

      const res = await response.json();

      if(res.success){
        cmt.setComments((preVal: any)=>{
          return [
            cmtData,
            ...preVal
          ]
        })
        setCommentData({comment: ''})
      }
    } catch (error){
      return error
    }
  }

  const handleChange = (e:any)=>{
    const {name, value} = e.target;
    setCommentData((prevVal)=>{
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  return (
    <div id="add-comment" className="m-4 max-w-xl flex gap-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image width={64} height={64} src={avatar} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="rounded-t-lg overflow-hidden flex-1">
        <textarea onChange={handleChange} name="comment" value={commentData.comment} placeholder="Add your Comment" id="" rows={3} className="resize-none custom-scrollbar p-2 outline-none border-b-2 focus:border-b-purple-600 w-full"></textarea>
        <div className="flex items-center justify-between px-2">
          <button>😊</button>
          <button onClick={postComment} className="text-white px-2 wfu py-1 bg-rose-500 rounded-lg">Post</button>
        </div>
      </div>
    </div>
  )
}

export default AddComment