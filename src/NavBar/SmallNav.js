import React from 'react'
import { Link } from 'react-router-dom'

const SmallNav = () => {
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
                <div className='text-3xl'>
                    <ion-icon name="home-outline"></ion-icon>
                </div>
                <div className="text-3xl mr-3 flex justify-center items-center">
                    <span className='relative '><ion-icon name="cart-outline"></ion-icon> <span className='text-sm  p-1  px-2 absolute -top-3 -right-3 bg-green-400 text-white rounded-full'>2</span></span>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
        <form action="" className='p-2 self-center flex-shrink-0 '>
            <input className="rounded-l p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-gray-200 w-96 shrink-0 outline-none " placeholder="Search for products, brands and categories... "/>
            <button className="px-2 rounded-r bg-gray-200 font-extrabold text-gray-500  p-2 uppercase border-t border-b border-r">
            <ion-icon name="search-outline"></ion-icon>
            </button>                            
        </form>
        </div>
        
    </div>
  )
}

export default SmallNav