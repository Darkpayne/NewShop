import React from 'react'
import BSP from './BSP'
import Deals from './Deals'
import Hero from './Hero'
import Recommend from './Recommend'
import Sponsored from './Sponsored'
import Cart from './Cart';
import Cards from './Cards'
import MainNav from '../NavBar/MainNav'
import Footer from '../Footer/Footer'


const Body = () => {
  return (
    <>
    <MainNav />
    <section className='bg-black w-full'>
        <section className='bg-black h-full lg:container lg:mx-auto'>
          <Hero/>
        </section>
        <section className='bg-black h-full '>
            <Recommend/>
        </section>
        <section>
          <Sponsored/>
        </section>
        <section>
          <Deals/>
        </section>
        <section>
          <BSP />
        </section>
        <section>
          <Cart />
        </section>
        <section className=''>
          <Cards />
        </section>
    </section>
    <Footer /> 
    </>
  )
}

export default Body