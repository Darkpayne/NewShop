import React from 'react'
import Navigation from './Navigation'
import Navbar from './Navbar'
import Nav from './Nav'
import SmallNav from './SmallNav'

const MainNav = () => {
  return (
    <div className='sticky top-0 z-10'>
        <section className="bg-white hidden md:block">
        <Nav />
      </section>
      <section className='bg-pink-600 w-full shadow-md hidden md:block'>
        <Navbar />
      </section>
      <section className='bg-pink-800 w-full shadow-md hidden md:block'>
        <Navigation/>
      </section>
      <section className='bg-white md:hidden'>
        <SmallNav/>
      </section>
    </div>
  )
}

export default MainNav