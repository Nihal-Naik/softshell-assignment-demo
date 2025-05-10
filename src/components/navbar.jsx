import React from 'react'

const navbar = ({desc,cont,test}) => {

  const handlescrolltotop=() => {
    desc.current?.scrollIntoView({behavior:'smooth'})
  }
  const handlescrolltocontact=() => {
    cont.current?.scrollIntoView({behavior:'smooth'})
  }
  const handlescrolltotestimonials=() => {
    test.current?.scrollIntoView({behavior:'smooth'})
  }
  
  
  
  return (
    <nav className='md:flex md:justify-between md:p-3 md:text-lg md:fixed md:top-0 md:right-0 md:left-0 bg-white md:w-full w-[16rem] items-center z-10 flex justify-between text-[5px] p-1'>
      <p onClick={handlescrolltotop} className="transition hover:scale-110 ease-in-out text-[rgb(37,55,112)] font-bold md:ml-5 cursor-pointer">
        SoftShell
      </p>
      <div className="text-[rgb(37,55,112)] font-bold flex items-center w-[7rem] justify-around md:w-[35rem] md:justify-evenly">
        <p onClick={handlescrolltotestimonials} className='md:mr-15 hover:scale-110 transition ease-in-out duration-200 cursor-pointer'>Testimonials</p>
        <p onClick={handlescrolltocontact} className='md:mr-15 hover:scale-110 transition ease-in-out duration-200 cursor-pointer'>Contact</p>
        <button className='md:mr-10 rounded-full border-2 md:p-3 border-[rgb(23,55,112)] cursor-pointer bg-[rgb(23,55,112)] text-white transition hover:scale-110 ease-in-out'>Sell My Licenses</button>
      </div>
    </nav>
  )
}

export default navbar