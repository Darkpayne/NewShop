import React from 'react'

const Footer = () => {
    
let Footer = [

    {logo:"mail",
    title:"EMAIL SUPPORT",
    content:"help@konga.com",},
    
    {logo:"call",
    title:"PHONE SUPPORT",
    content:"07080635700, 08094605555, 018883435",},
    
    {logo:"logo-whatsapp",
    title:"WHATSAPP",
    content:"09070038400, 08094605555",},
    ]
    
  return (
      <section className='bg-black w-full'>
      <div className=" bg-gray-400 ">
            <div className='lg:container lg:mx-auto'>
                <div className="flex flex-wrap lg:flex gap-1 p-3 ">
                    <div className="md:flex">
                        {
                            Footer.map((data)=>(
                                <div className="flex p-2 ">
                                    <div className="mr-3 bg-white rounded-full flex-shrink-0 h-16 w-16 flex items-center justify-center">
                                        <div className='justify-center text-3xl'>
                                            <ion-icon name={data.logo} ></ion-icon>
                                        </div>
                                    
                                    </div>
                                    <div className="flex lg:items-center justify-center">
                                        <div className="">
                                            <h3 className='text-gray-800 font-bold'>{data.title}</h3>
                                            <h5 className='text-gray-600 text-sm'>{data.content}</h5>
                                        </div>
                                        
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="hidden  xl:flex items-center justify-center">
                        <div className="p-1 ">
                            <h3 className='text-gray-800 font-bold'>GET LATEST DEALS</h3>
                            <h5 className='text-gray-600 text-sm'>
                                Our best promotions sent to your inbox.
                            </h5>
                        </div>
                    </div>
                    <div className="grow">
                    <form action="" className='p-2 self-center flex-nowrap'>
                            <input className="rounded-l p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white " placeholder="Email Address "/>
                            <button className="px-2 rounded-r bg-pink-500  text-white font-bold p-2 uppercase border-pink-500 border-t border-b border-r">
                            SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    </div>
    <Links />
    <Name />
    </section>
  )
}

const Links = () => {
    
    return (
        <div>
           <div className="lg:container lg:mx-auto">
               <div className="flex flex-row p-5">
                   <div className="flex-auto grid lg:grid-cols-5 grid-cols-4 gap-2">
                       <div className="text-gray-300">
                           <h2 className='text-sm font-medium'>ABOUT KONGA</h2>
                           <ul className='text-sm text-gray-500'>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Contact Us</li>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>About Us</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Careers</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Our Blog</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Forum</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Terms & Conditions</li>
                           </ul>
                       </div>
                       <div className="text-gray-300">
                           <h2 className='text-sm font-medium'>PAYMENT</h2>
                           <ul className='text-sm text-gray-500'>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>KongaPay</li>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Wallet</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Verve</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Mastercard</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Visa</li>

                           </ul>
                        </div>
                       <div className="text-gray-300">
                       <h2 className='text-sm font-medium'>BUYING ON KONGA</h2>
                           <ul className='text-sm text-gray-500'>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Buyer Safety Centre</li>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>FAQs</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Delivery</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Konga Return Policy</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Digital Services</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Bulk Purchase</li>
                           </ul>
                       </div>
                       <div className="text-gray-300">
                       <h2 className='text-sm font-medium'>MORE INFO</h2>
                       <ul className='text-sm text-gray-500'>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Site Map</li>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Track My Order</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Privacy Policy</li>
                                <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Authentic Items Policy</li>
                           </ul>
                       </div>
                       <div className="text-gray-300 col-span-2 lg:col-span-1">
                           <h2 className='text-sm font-medium'> MAKE MONEY ON KONGA</h2>
                           <ul className='text-sm text-gray-500'>
                               <li className='hover:text-gray-200 cursor-pointer transition  duration-500 hover:scale-105'>Become a Konga Affiliate</li>
                           </ul>
                        </div>
                   </div>
                   <div className="text-gray-300 flex-auto flex justify-center ">
                       <div className="">
                        <h2 className='text-sm font-medium'>DOWNLOAD & CONNECT WITH US</h2>
                        <div className="flex">
                            <div className="flex p-2 ">
                                        <div className=" flex-shrink-0 h-16 w-16 flex items-center ">
                                            <div className='justify-center text-white text-3xl'>
                                            <ion-icon name="logo-apple"></ion-icon>
                                            </div>
                                        
                                        </div>
                                        <div className="flex lg:items-center justify-center">
                                            <div className="">
                                                <h3 className='text-gray-400 font-bold'>Download on</h3>
                                                <h5 className='text-gray-300 text-sm'>App Store</h5>
                                            </div>     
                                        </div>
                                </div>
                                <div className="flex p-2 ">
                                        <div className=" flex-shrink-0 h-16 w-16 flex items-center justify-center">
                                            <div className='justify-center text-white text-3xl'>
                                            <ion-icon name="logo-android"></ion-icon>
                                            </div>
                                        
                                        </div>
                                        <div className="flex lg:items-center justify-center">
                                            <div className="">
                                                <h3 className='text-gray-400 font-bold'>Download on</h3>
                                                <h5 className='text-gray-300 text-sm'>Google Play</h5>
                                            </div>     
                                        </div>
                                </div>
                            </div>
                            <div className="m-3">
                                <h2 className='text-sm font-medium'>CONNECT WITH US</h2>
                                <div className="flex">
                                    <div className='bg-gray-700 m-2 rounded-full flex-shrink-0 flex h-10 w-10 items-center justify-center  hover:bg-gray-200 cursor-pointer'>
                                        <span className='transition border-0 duration-500 hover:scale-150 hover:text-blue-500'><ion-icon name="logo-facebook"></ion-icon></span>
                                    </div>
                                    <div className='bg-gray-700 m-2 rounded-full flex-shrink-0 flex h-10 w-10 items-center justify-center hover:bg-gray-200 cursor-pointer'>
                                        <span className='transition border-0 duration-500 hover:scale-150 hover:text-blue-500'>
                                        <ion-icon name="logo-twitter"></ion-icon>
                                        </span>
                                    </div>
                                    <div className='bg-gray-700 m-2 rounded-full flex-shrink-0 flex h-10 w-10 items-center justify-center hover:bg-gray-200 cursor-pointer'>
                                        <span className='transition border-0 duration-500 hover:scale-150 hover:text-pink-500'>
                                        <ion-icon name="logo-instagram"></ion-icon>
                                        </span>
                                    </div>
                                    <div className='bg-gray-700 m-2 rounded-full flex-shrink-0 flex h-10 w-10 items-center justify-center hover:bg-gray-200 cursor-pointer hover:text-red-500'>
                                        <span className='transition border-0 duration-500 hover:scale-150  '>
                                        <ion-icon name="logo-youtube"></ion-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div> 
        </div>

    )
}

const Name = () =>{
    return (
        <div className='lg:container lg:mx-auto'>
            <div className="pt-10 pb-5 text-center text-sm text-gray-300">
            © 2021 Copyright Joshua Clifford. All right reserved
            </div>

        </div>
    )
}

export default Footer