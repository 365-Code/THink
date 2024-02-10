"use client"
import React, { useEffect, useState } from 'react'
import Article from './Article'
import Carousel from './Carousel'

const Articles = (props: {articles: Array<any>}) => {


  function slideShow(d:number){
    setCurrentSlide((prev)=>{
      return ((Math.abs(prev+d))%(art.length))
    })
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      slideShow(1)
    }, 3000)

    return clearTimeout(timeOut)

  }, [currentSlide] )

  const art = [
    {
      profile:'https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg',
      user:'Anonymous-1',
      thumbnail:'https://img.freepik.com/premium-photo/blockchain-technology-network-concept-businessman-blockchain-hand-with-icons-network-connection-blue-security-digital-connection-background_10221-21771.jpg',
      title:'Discover Article About Artificial Intelligence',
      description:'Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit. adipisicing elit. Rem, quis voluptas laudantium eum saepe atque fugit velit sequi.'
    },
    {
      profile:'https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg',
      user:'Anonymous-2',
      thumbnail:'https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg',
      title:'Discover Article About Dynammic Programming',
      description:'Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit. adipisicing elit. Rem, quis voluptas laudantium eum saepe atque fugit velit sequi.'
    },
    {
      profile:'https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg',
      user:'Anonymous-3',
      thumbnail:'https://img.freepik.com/premium-photo/blockchain-technology-network-concept-businessman-blockchain-hand-with-icons-network-connection-blue-security-digital-connection-background_10221-21771.jpg',
      title:'Discover Article About Natural Language Processing',
      description:'Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit. adipisicing elit. Rem, quis voluptas laudantium eum saepe atque fugit velit sequi.'
    }
  ]

  art.slice(0,3)

  return (
    <section id="articles" className="my-container-1 text-center">
        <div className="flex items-center gap-2 my-2">
          <hr className="w-full" />
          <h3 className="text-center text-lg font-semibold">Articles</h3>
          <hr className="w-full" />
        </div>


        {/* <div className='relative w-full h-full flex overflow-hidden'>
          {
            props.articles?.map((a, i)=>(
              <div key={i} id='article' className={`${i == currentSlide ? "z-[1] opacity-100 left-0 absolute" : `relative translate-x-full opacity-0`} top-1/2 -translate-y-1/2 overflow-hidden transition-all w-full ease-in-out`}>
                  <Article article={a} />
              </div>
            ))
          }
        </div> */}

        <Carousel images={[art[0].thumbnail,art[0].thumbnail,art[0].thumbnail]}/>


        <div className='flex justify-center items-center p-2 gap-2'>

          {
            art.map((a, i)=>(
              <div key={i} id='article' 
              className={`${i == currentSlide ? "bg-slate-500" : `bg-slate-300`} h-3 w-3 rounded-full transition-all ease-in-out`}>
              </div>
            ))
          }

        </div>



      </section>

  )
}

export default Articles