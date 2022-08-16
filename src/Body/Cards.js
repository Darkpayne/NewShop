import React from 'react'

const Cards = () => {
    let Cards = [

        {id:1,
            src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648469033/contentservice/home.png_Bkg4NmkXc.png",
        title:"HOME FURNISHINGS",
        desc:"Get Up To 70% Off",
        link:"SHOP NOW",},
        
        {id:2,
            src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1650198549/contentservice/fitness.png_rkczdYYN5.png",
        title:"FITNESS TOOLS & EQUIPMENT",
        desc:"Get Fitness Equipment At Amazing Discounts!",
        link:"SHOP NOW",},
        
        {id:3,
            src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1650198545/contentservice/kids.png_ryFG_FYE5.png",
        title:"KIDS WEARS & ACCESSORIES",
        desc:"Get All Kiddies Products At Huge Discounts!",
        link:"SHOP NOW",},
        
        {id:4,
            src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1650198547/contentservice/tv.png_SywfuYYN5.png",
        title:"TOP DEALS ON TELEVISIONS",
        desc:"Get the TV You Want With Bargain Deals!",
        link:"SHOP NOW",},
        ]
        
        
let Logo = [

    {id:1,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1605874160/contentservice/hp.png_BJTuxM4r9w.png",},
    
    {id:2,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1605874103/contentservice/itec.png_ry0n-NSqP.png",},
    
    {id:3,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1624436320/contentservice/Intel.png_BySv0vehO.png",},
    
    {id:4,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652367829/contentservice/barcardi.png_BkLCZocIq.png",},
    
    {id:5,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1637166453/contentservice/tecno.png_H12uTiGuY.png",},
    
    {id:6,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1605874108/contentservice/uni.png_S10ET-Vrcv.png",},
    
    {id:7,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1637101406/contentservice/haier.png_r1LDJ3ZdK.png",},
    
    {id:8,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1605874087/contentservice/coke.png_H1khbVHcv.png",},
    
    {id:9,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1607947019/contentservice/samsung.png_SJWMXANnv.png",},
    
    {id:10,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1621431873/contentservice/lenovo%20logo.png_rJIrIcMtO.png",},
    
    {id:11,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1624635999/contentservice/brands.png_Bkvw9OXnd.png",},
    
    {id:12,
        src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1643360594/contentservice/brands.png_H1d8ZNbAK.png",},
    ];
    
  return (
      <>
            <div className="lg:container lg:mx-auto">
                    <div className="flex flex-nowrap overflow-auto">
                        {
                            Cards.map((card)=>(
                                <div key={card.id} class="flex-none lg:flex-initial max-w-sm bg-white rounded border border-gray-200 shadow-md mx-3">
                                <a href="#">
                                    <img class="rounded-t-lg mb-5" src={card.src} alt="" />
                                </a>
                                <div class="p-5 ">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl font-bold  text-gray-600 ">{card.title}</h5>
                                    </a>
                                    <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
                                        {card.desc}
                                    </p>
                                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium  text-pink-500 ">
                                        {card.link}
                                        <span><svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg></span>
                                    </a>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:container lg:mx-auto mt-6">
                    <div className="grid grid-cols-6 p-2 rounded-lg">
                        {
                            Logo.map((logo)=>(
                                <div key={logo.id} className="shadow sm:h-40 h-24 bg-white flex items-center p-2 ">
                                    <img src={logo.src} alt="" className='transition border-0 duration-500 hover:scale-105' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:container lg:mx-auto py-6  ">
                    <div className='bg-white p-5 rounded  hidden md:block'>
                        <div className="">
                            <h1 className='text-gray-700 text-xl font-medium mx-3'>
                                Konga Online Shopping in Nigeria - Best Shopping Site
                            </h1>
                        </div>
                        <div className=" p-2">
                            <p className='text-gray-500 text-sm leading-7'>
                            Konga.com is Nigeria's number one online Shopping destination.We pride ourselves in having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands. Some of our other categories include Food and drinks, automotive and industrial, books, musical equipment, babies and kids items, sports and fitness, to mention a few. To make your shopping experience swift and memorable, there are also added services like gift vouchers, consumer promotion activities across different categories and bulk purchases with hassle-free delivery. Enjoy free shipping rates for certain products and with the bulk purchase option, you can enjoy low shipping rates, discounted prices and flexible payment. When you shop on our platform, you can pay with your debit card or via KongaPay, which is a convenient and secured payment solution. Get the best of lifestyle services online. Don't miss out on the biggest sales online which takes place on special dates yearly. 
                            </p>
                        </div>
                    </div>   
                </div>
        </>
  )
}

export default Cards