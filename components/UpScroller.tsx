"use client"
import React, { useEffect, useState } from 'react'

const UpScroller = () => {

    const [upVisible, setupVisible] = useState("hidden")
    
    useEffect(()=>{
        window.onscroll = ()=>{
            scrollY > (1.02*window.screen.height) ? setupVisible("flex") : setupVisible("hidden")
          }
    })

  return (
    <i
        onClick={() => scrollTo(0, 0)}
        className={`fi fi-sr-angle-small-up ${upVisible} fixed bottom-12 right-12 z-[5] cursor-pointer rounded-full bg-[#181818] p-4 hover:bg-white hover:text-black`}
      />
  )
}

export default UpScroller