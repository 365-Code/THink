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
    },
    {
      profile:'https://img.freepik.com/free-photo/view-3d-man-holding-soda-can_23-2150709928.jpg',
      user:'Anonymous-2',
      thumbnail:'https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg',
      title:'Discover Article About Dynammic Programming',
      description:'Lorem ipsum dolor sit amet consectetur,Lorem ipsum dolor sit. adipisicing elit. Rem, quis voluptas laudantium eum saepe atque fugit velit sequi.'
    },
  ]

  return (
    <section id="articles" className="my-container-1 text-center">
        <div className="flex items-center gap-2 my-2">
          <hr className="w-full" />
          <h3 className="text-center text-3xl font-semibold">Articles</h3>
          <hr className="w-full" />
        </div>
        {
          <Carousel images={[art[0].thumbnail,art[1].thumbnail,art[2].thumbnail,art[3].thumbnail]} content={art} />
        }
      </section>

  )
}

export default Articles