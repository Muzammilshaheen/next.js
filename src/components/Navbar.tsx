import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>

      <div className='text-xl font-medium'>
          <img src='/ms.png' alt='Logo' className='inline w-8 h-8 mr-2' /> MUZAMMIL
        </div>

         <ul className='gap-10 lg:gap-16 md:flex'>
          <li className='menuLink'><a href="#hero">Home</a></li>
          <li className='menuLink'><a href="#about">About</a></li>
          <li className='menuLink'><a href="#projects">Projects</a></li>
          <li className='menuLink'><a href="#skill">Skill</a></li>
          <li className='menuLink'><a href="#content"></a>Content</li>
         </ul>



      </div>
    </div>
  )
}

export default Navbar