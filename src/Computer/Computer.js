import React from 'react'
import Body from './Body'
import Header from './Header'
import { UseGlobalContext } from '../context'
import MainNav from '../NavBar/MainNav'
import Footer from '../Footer/Footer'

const Computer = () => {
  const { onAdd } = UseGlobalContext();
  return (
    <>
    <MainNav />
    <section className=''>
      <Header />
    </section>
      <section className='bg-gray-200'>
        <Body />
      </section>
      <Footer />
    </>
  )
}

export default Computer