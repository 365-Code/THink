import React from 'react'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <main className="my-container-1">
    <div className="grid md:flex md:flex-wrap md:justify-between sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:space-y-0 space-y-4 justify-items-center">
        <BlogCard thumbnail="https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg" title="BlogCard - 4" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident fugit, alias animi veniam cumque neque ipsa aspernatur maxime consequatur excepturi praesentium? Ad sapiente eos autem id dolorum accusamus eligendi similique modi, consectetur a. Dolores at, natus doloribus itaque rem iure ea officia voluptatum facere, aperiam inventore quidem enim fugit eveniet qui autem minima possimus tempora repellendus optio culpa voluptates!" />
        {/* <BlogCard thumbnail="https://img.freepik.com/premium-photo/ai-chat-bot-communicate-answer-question-busines-generative-ai_760510-535.jpg" title="BlogCard - 1" description="This is a description" />
        <BlogCard thumbnail="https://img.freepik.com/free-photo/view-nature-landscape-with-river_23-2150763810.jpg" title="BlogCard - 2" description="This is a description" />
        <BlogCard thumbnail="https://img.freepik.com/free-photo/futuristic-finance-digital-market-graph-user-interface-with-diagram-technology-hud-graphic-concept_90220-1365.jpg" title="BlogCard - 3" description="This is a description" />
        <BlogCard thumbnail="https://img.freepik.com/free-photo/motherboard-closeup-technology-integrated-microchip-circuit-board-computer-processor-with-neon-light_90220-1203.jpg" title="BlogCard - 4" description="This is a description" /> */}
    </div>
  </main>
  )
}

export default Blogs