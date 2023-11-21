import { avatar } from '@/lib'
import Image from 'next/image'
import React from 'react'

const AddComment = () => {
  return (
    <div id="add-comment" className="m-4 max-w-xl flex gap-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image width={64} height={64} src={avatar} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="rounded-t-lg overflow-hidden flex-1">
        <textarea name="" placeholder="Add your Comment" id="" rows={3} className="resize-none custom-scrollbar p-2 outline-none border-b-2 focus:border-b-purple-600 w-full"></textarea>
        <div className="flex items-center justify-between px-2">
          <button>😊</button>
          <button className="text-white px-2 wfu py-1 bg-rose-500 rounded-lg">Post</button>
        </div>
      </div>
    </div>
  )
}

export default AddComment