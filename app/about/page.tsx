import React from 'react'

const page = () => {
  return (
    <div className='my-container flex sm:flex-row flex-col gap-2 items-center sm:items-start sm:justify-center py-8'>

        <div className='w-[300px] h-[320px] overflow-hidden rounded-lg'>
            <img 
            className='h-full w-full object-cover object-center'
            src="https://img.freepik.com/free-photo/3d-portrait-high-school-teenager_23-2150793937.jpg?ga=GA1.1.1835354613.1698558582&semt=ais_ai_generated" 
            alt="me" />
        </div>
        <div className='sm:w-2/5 w-[300px]'>
            <h1 className='text-2xl font-semibold'>About Me</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eveniet quod laudantium molestias, dignissimos a! Inventore nobis dicta, provident optio totam dolorem ex reiciendis molestiae harum impedit alias expedita soluta voluptates sequi ut commodi earum sunt cumque dolore nisi eligendi? Non nobis ducimus mollitia voluptates aspernatur itaque accusantium nemo architecto!</p>
        </div>


    </div>
  )
}

export default page