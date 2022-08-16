import React from 'react'

const BSP = () => {
    let BSP = [
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/R/118566_1627394149.jpg",
        title:"Sprite Can 33cl X 24",
        price:"₦3,570",
        dp:"₦4,500",
        save:"You save ₦100,000",discount:"20% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/F/1_1521560005.jpg",
        title:"Devon Vegetable Oil 5L",
        price:"₦7,300",
        dp:"₦12,000",
        save:"You save ₦4,700",discount:"29% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/S/1_1521560006.jpg",
        title:"Devon Vegetable Oil 3L",
        price:"₦4,500",
        dp:"₦4,910",
        save:"You save ₦400",discount:"8% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/T/118566_1604670702.jpg",
        title:"Big Bull Rice 25kg",
        price:"₦14,500",
        dp:"₦15,810",
        save:"You save ₦1,410",discount:"8% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/C/_1644497380.jpg",
        title:"Johnnie Walker Black Label ...",
        price:"₦10,350",
        dp:"₦14,000",
        save:"You save ₦3,650",discount:"26% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/F/_1642604071.jpg",
        title:"Eva Water - 75cl X 12 Piec...",
        price:"₦950",
        dp:"",
        save:""},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/E/170997_1607071737.jpg",
        title:"Devon King's Vegetable Oil ...",
        price:"₦7,000",
        dp:"₦7,300",
        save:"You save ₦300"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/F/_1642604071.jpg",
        title:"Eva Water 1.5L X 12 Piece...",
        price:"₦1,527",
        dp:"₦1,800",
        save:"You save ₦273",discount:"4% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/L/86527_1574874160.jpg",
        title:"QASA Rechargeable Lantern W...",
        price:"₦2,450",
        dp:"₦4,500",
        save:"You save ₦2,050",discount:"15% OFF"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/J/1_1521561074.jpg",
        title:"Johnnie Walker Red Label...",
        price:"₦5,000",
        dp:"₦6,000",
        save:"You save ₦1,000",discount:"16% OFF"},
        ]
  return (

        <div className='lg:container lg:mx-auto bg-white rounded-lg my-5'>
            <div className="flex p-4 border-b-2 bg-slate-800 rounded-t-lg" >
                <h1 className='mr-8 font-bold text-xl text-white'>Best Selling Products</h1> 
            </div>
            <div className="my-5 flex justify-between lg:container lg:mx-auto bg-white flex-nowrap overflow-auto p-4 rounded">
               {
                   BSP.map((data)=>(
                   <div className="duration-500 transition-all cursor-pointer hover:shadow-lg p-2 py-3 shadow m-2 flex-none">
                       <div className="flex justify-center relative">
                           <img src={data.src} alt="" className='h-48 w-48 ' />
                           
                           {data.discount &&  <div className="h-15 w-14 top-0 left-0 rounded-r-xl p-1  bg-red-600 text-white absolute text-sm">{data.discount}</div>}
                           
                           
                       </div>
                       <div className="truncate py-1">
                           <h3 className='text-lg font-bold'>{data.title}</h3>
                       </div>
                       <div className='flex text-base py-1'>
                           <h3 className='font-bold mr-2'>{data.price}</h3> <p className='text-xs line-through'>{data.dp}</p>
                       </div>
                       <div className="">
                           <p className='text-green-500 text-sm'>{data.save}</p>
                       </div>
                   </div>
                   ))
               }
            </div>
        </div>
  )
}

export default BSP