import React from 'react'

const BlogCardSkeleton = () => {
  return (
    <div className="bg-[#181818] p-4 relative rounded-lg w-[350px]">
  <div className="w-full h-[230px] animate-pulse rounded-lg bg-[#121212]" />
  <div className="py-2 space-y-4">
    <div className="w-full h-[45px] animate-pulse bg-[#121212] rounded-lg" />
    <div className="w-full h-[115px] animate-pulse rounded-lg bg-[#121212]" />
    <div className="flex items-center gap-4 justify-between w-full rounded-lg">
      <div className="w-1/2 h-[35px] animate-pulse rounded-lg bg-[#121212]" />
      <div className="w-1/2 bg-[#121212] h-[35px] animate-pulse rounded-lg" />
    </div>
    <div className='w-full bg-[#121212] h-[50px] animate-pulse rounded-lg' />
  </div>
</div>
  )
}

export default BlogCardSkeleton