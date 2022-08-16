import React from 'react'

const Deals = () => {
    let Deals = [
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/A/196854_1651244290.png",title:"MTN Hynetflex 4g & Broadband",price:"₦25,000",dp:"",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/Y/161149_1650969765.png",title:"GoNigeria T-shirt",price:"₦3,200",dp:"",save:"+ Free Shipping"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/V/139721_1636738006.jpg",title:"Oraimo 27000mAh Power Traveller 3 Byte",price:"₦12,300",dp:"₦13,500",save:"You save ₦1,200"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg",title:"LGS 43 Full HD LED TV",price:"₦88,500",dp:"",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/K/118566_1592897938.jpg",title:"Tecno Camon 15 Premier 6GB Ram+128gb",price:"₦104,000",dp:"₦128,080",save:"You save ₦24,080"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/G/61771_1642929443.jpg",title:"Superlife Stc 30 ",price:"₦12,500",dp:"₦33,000",save:"You save ₦20,500"},
        ];
  return (
    <>
        <div className='lg:container lg:mx-auto bg-white rounded '>
            <div className="flex p-6 border-b-2" >
                <h1 className='mr-8 font-bold text-xl'>Today's Deals</h1> <p className='hover:underline cursor-pointer text-pink-400'>See All Items</p>
            </div>
       
            <div className="grid grid-cols-3 gap-3 my-5 p-3 px-6 ">
               {
                   Deals.map((item,index)=>(
                       <div  className="flex items-center shadow hover:shadow-lg p-5 hover:-translate-y-1 duration-500 cursor-pointer">
                           <div className="">
                               <img src={item.src} alt="" className='lg:h-36 h-32 p-1'/>
                           </div>
                           <div className="truncate pl-2">
                               <h2 className='text-lg'>{item.title}</h2>
                               <div className='flex text-base'>
                                   <h2 className='font-bold mr-2'>{item.price}</h2>
                                   <p className='text-xs line-through'>{item.dprice}</p>
                               </div>
                               <div className="">
                                   <p className='text-green-500 text-sm'>{item.save}</p>
                               </div>
                           </div>
                       </div>
                   ))
               }
            </div>
        </div>
        <div className="lg:container lg:mx-auto my-6 rounded bg-white">
            <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023668/contentservice/mobile%20strip.jpg_B14OZvS85.jpg" alt="" className='p-3'/>
        </div>
        <div className="lg:container lg:mx-auto grid grid-cols-2 p-2 bg-white gap-2 "  >
            <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652367824/contentservice/barcardistore.png_H18C-oqIc.png" alt="" className='rounded'/>
            <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1649577275/contentservice/fmcg.png_rJlBpZlE9.png" alt="" className=' rounded'/>
        </div>
    </>
  )
}

export default Deals