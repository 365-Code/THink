import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="my-container-1 flex flex-col sm:flex-row  items-center gap-4 justify-between bg-black">
    <div className="sm:text-left sm:w-1/2 w-full text-center">
      <h3 className="sm:text-3xl text-xl font-semibold">Subscribe for New Content</h3>
      <p className="font-light sm:w-4/5">Wanna ask something? Just type it and get in touch. Lorem, ipsum.</p>
    </div>

    <div className="sm:w-1/2 w-full px-4">
      <div className="flex flex-col md:flex-row items-center gap-2">
        <input type="text" className="w-full rounded-full px-4 py-2 focus-within:border-blue-500 border border-[#181818] transition-all" placeholder="Email" />
        <button className="selected-category text-sm">Subscribe</button>
      </div>
    </div>

  </section>
  )
}

export default Contact