import React from 'react';
import { useState } from 'react';
import { UseGlobalContext } from '../context';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const {state : {cartItem}} = UseGlobalContext(); 

    let Links = [
        {name:"Store Locator",link:"/"},
        {name:"Sell on Konga",link:"/computer"},
       
    ];
    let Links1 = [
        {name:"Help",link:"/about"},
        // {name:"Login/signup",link:"/contact"},
      
    ]

    const [open, setOpen] = useState(false);
  return (
    <section className='lg:container lg:mx-auto'>
        {/* <div className='flex items-center mx-4 flex-row '> */}
        <div className='grid grid-cols-8 justify-items-stretch items-center mx-4  '>
            <div className='col-span-1 font-bold flex text-2xl cursor-pointer mr-7 '>
            <Link to="/"><img src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png" className='' alt="" style={{"height": "30px"}} /></Link>
            </div>
            <div className=' col-span-7'>
                <section className="flex mr-6  justify-around">
                        <ul className='flex text-white'>
                            {
                                Links.map((link)=>(
                                    <li className=' p-3 text-sm h-full self-center hover:bg-white hover:text-pink-600 cursor-pointer'>{link.name}</li>
                                ))
                            }
                        </ul> 
                        <form action="" className='p-2 self-center flex-shrink-0 md:block hidden'>
                            <input className="rounded-l p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white lg:w-[400px] md:w-[300]  shrink-0 " placeholder="Search for products, brands and categories... "/>
                            <button className="px-2 rounded-r bg-yellow-500  text-white font-bold p-2 uppercase border-yellow-500 border-t border-b border-r">
                            <ion-icon name="search-outline"></ion-icon>
                            </button>
                        </form>
                        <ul className='flex text-white '>
                        <Link to="/login"><li className=' p-3 text-sm h-full hover:bg-white hover:text-pink-600 cursor-pointer '>Login/signup</li></Link>
                            {
                                Links1.map((link)=>(
                                    <li className=' p-3 text-sm h-full hover:bg-white hover:text-pink-600 cursor-pointer '>{link.name}</li>
                                ))
                            }
                        </ul> 
                        
                <div className='flex-none self-center'>
                    <Link to="/cart"><button className='bg-green-500 text-white rounded  px-4 py-3 text-sm ml-3'>
                <ion-icon name="cart-outline"></ion-icon> My Cart 
               {cartItem.length !== 0 && <span className='bg-white text-sm text-black p-1 rounded px-2 ml-1'>{cartItem.length}</span>}
                    </button></Link>
                </div>
                </section>
                </div>
            </div>
    </section>
  )
}

export default Navbar