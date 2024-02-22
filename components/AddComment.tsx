"use client"
import { avatar } from '@/lib'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const AddComment = (cmt: { comments: any, setComments: any }) => {
  const authUser = useSelector((state: any) => state.authReducer.auth)
  const [commentData, setCommentData] = useState('')

  const { blogId: bId } = useParams()

  const postComment = async () => {
    const cmtData = {
      comment: commentData,
      profile: authUser.user.profile || avatar,
      username: authUser.user.username,
      email: authUser.user.email,
    }

    try {
      const response = await fetch(`/api/blogs/addComment/?bId=${bId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(cmtData)
      })

      const res = await response.json();

      if (res.success) {
        cmt.setComments((preVal: any) => {
          return [
            cmtData,
            ...preVal
          ]
        })
        setCommentData('')
      }
    } catch (error) {
      return error
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCommentData(value)
  }

  const [emoji, setEmoji] = useState(false)

  document.body.onclick = () => {
    emoji ? setEmoji(!emoji) : null
  }

  const toggleEmoji = () => {
    setEmoji(!emoji)
  }

  return (
    <div id="add-comment" className="m-4 max-w-xl flex gap-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image width={64} height={64} src={avatar} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="rounded-t-lg flex-1">
        <textarea onChange={handleChange} name="comment" value={commentData} placeholder="Add your Comment" id="" rows={3} className="resize-none no-scrollbar p-2 outline-none border-b-2 focus:border-b-purple-600 w-full"></textarea>
        <div className="flex items-center justify-between px-2">
          <button className='relative'>
            <div className={`hidden md:block ${emoji ? "w-auto translate-x-0" : "w-0 translate-x-2"} overflow-hidden transition-all right-full bottom-full absolute`}>
              <EmojiPicker theme={Theme.DARK} onEmojiClick={(e: any) => { setCommentData((preCmt) => preCmt + e.emoji) }} />

            </div>
            <i onClick={toggleEmoji} className="fi fi-sr-smile-beam text-lg text-yellow-500 relative z-10 " />
          </button>

          <button onClick={postComment} className="text-white px-2 py-1 flex gap-2 items-center bg-rose-500 hover:bg-rose-600 rounded-lg">
            <span>Post</span>
            <i className="fi fi-sr-message-arrow-up-right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddComment