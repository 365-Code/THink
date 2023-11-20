import React from 'react'

const Discover = () => {
  return (
    
    <section id="discover" className="my-container space-y-4 rounded-md border-[0.5px] shadow-sm shadow-white">

    <div className="inner-container">
    <h1 className="sm:text-3xl text-2xl font-semibold">Discover Nice Articles Here</h1>

    <p className="w-4/5 sm:text-lg text-sm capitalize">All the article and contents of the maybe <span className="font-semibold">uploaded today</span> and they can find your <span className="font-semibold">article and content</span> quickly and without any problem</p>

    <div className="flex sm:flex-row flex-col items-center gap-4">

      <div className="flex items-center sm:w-auto w-full rounded-lg bg-[#222222] px-2">
        <i id='fi' className="fi fi-sr-search text-[#ffffff]" />
        <input type="text" name="aSearch" id="search-articles" className="relative border-none px-3 py-2 outline-none" placeholder="Search" />
      </div>

      <div className="custom-scrollbar flex-1 w-full overflow-x-scroll">
        <ul className="flex items-center gap-4">
          <li className="cursor-pointer hover-glow-text">All</li>
          <li className="selected-category cursor-pointer hover-glow-text ">Technical</li>
          <li className="cursor-pointer hover-glow-text">Finance</li>
          <li className="cursor-pointer hover-glow-text">Business</li>
          <li className="cursor-pointer hover-glow-text">Design</li>
          <li className="cursor-pointer hover-glow-text">UI/UX</li>
        </ul>
      </div>
    </div>

    </div>
  </section>
  )
}

export default Discover