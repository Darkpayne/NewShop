import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { UseGlobalContext } from '../context';

const SmallNav = () => {
    const location = useLocation()
    const {state : {cartItem}} = UseGlobalContext(); 
  return (
    <div className='lg:container lg:mx-auto'>
        <div className="flex justify-between">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center text-xl cursor-pointer mx-2 hover:border-1">
               <Link to={'/'}><ion-icon name="arrow-back-outline"></ion-icon></Link> 
                </div>
                <Link to={'/'}><img src="https://www-konga-com-res.cloudinary.com/image/upload/w_250,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/logo-alternate.png" className='' alt="" style={{"height": "30px"}} /></Link> 
            </div>
            <div className="flex justify-between p-2">
                <Link to="/">
                <div className='text-3xl'>
                    <ion-icon name="home-outline"></ion-icon>
                </div></Link>
                <Link to="/cart">
                <div className="text-3xl mr-3 flex justify-center items-center">
                  <span className='relative '>
                    <ion-icon name="cart-outline"></ion-icon>
                    {cartItem.length !== 0 &&  <span className='text-sm  p-1  px-2 absolute -top-3 -right-3 bg-green-400 text-white rounded-full'>{cartItem.length}</span>}
                  </span>
                </div></Link>
            </div>
        </div>
        <div className='flex justify-center'>
        <form action="" className='p-2 self-center flex-shrink-0 '>
            <input className="rounded-l p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-gray-200 md:w-96 w-60 shrink-0 outline-none " placeholder="Search for products, brands and categories... "/>
            <button className="px-2 rounded-r bg-gray-200 font-extrabold text-gray-500  p-2 uppercase border-t border-b border-r">
            <ion-icon name="search-outline"></ion-icon>
            </button>                            
        </form>
        </div>

       {location.pathname === "/" && <div className="flex pb-2 grow items-center justify-around text-2xl my-2 text-gray-500">
            <span className='flex-col flex items-center'>
                <span><ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon> </span> <span className='text-xs'> Browse All</span>
            </span>

            <span className='flex-col flex items-center'>
                <span><ion-icon name="shirt-outline"></ion-icon></span>
                <span className='text-xs'> Fashion</span>
            </span>


            <Link to="/computer">
                <span className='text-green-500 flex-col flex items-center'>
                    <span><ion-icon name="laptop-outline"></ion-icon></span>                    <span className='text-xs'> Computers</span>
                </span>
            </Link>

            <span className='flex-col flex items-center'>
                <span><ion-icon name="phone-portrait-outline"></ion-icon></span>
                <span className='text-xs'>Phones</span>
            </span>

            <span className='flex-col flex items-center'>
                <span><ion-icon name="pricetags-outline"></ion-icon></span>                <span className='text-xs'>All Deals</span>
            </span>
        </div>
}
    </div>
  )
}

export default SmallNav