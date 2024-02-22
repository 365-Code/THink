import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="my-container-1 flex flex-col items-center gap-4 justify-center bg-black">
    <div className="sm:max-w-[80%] mx-auto text-center">
      <h3 className="sm:text-3xl text-xl font-semibold">Subscribe for New Content</h3>
      <p className="font-light">Wanna ask something? Just type it and get in touch.</p>
    </div>

      <div className="w-[600px] max-w-full flex items-center overflow-hidden h-[50px] border-black transition-all">
        <input type="text" className="w-full h-full focus-visible:border-blue-500 focus-visible:border p-4 transition-all" placeholder="Email" />
        <button className="bg-blue-500 hover:bg-blue-600 px-4 h-full text-sm">Subscribe</button>
      </div>
    {/* <div className="w-[600px] max-w-full h-">
    </div> */}

  </section>
  )
}

export default Contact