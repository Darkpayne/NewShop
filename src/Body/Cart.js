import React from 'react'

const Cart = () => {
    let Cart = [

        {id:1,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/J/59229_1647437863.jpg",
        title:"Gateway 11.6convertible To...",
        price:"₦150,000",
        dp:"₦160,000",
        save:"You save ₦10,000",
        discount: "6% OFF",},
        
        {id:2,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/Y/140825_1641825311.jpg",
        title:"Dell Mare Pro Backpack For ...",
        price:"₦9,500",
        dp:"",
        save:"",},
        
        
        {id:3,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/G/185010_1642353675.jpg",
        title:"Asus Mini E210m Intel Celer...",
        price:"₦155,000",
        dp:"",
        save:"",},
        
        {id:4,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/K/86085_1619021578.jpg",
        title:"Asus Mini- Intel Celeron - ...",
        price:"₦159,000",
        dp:"",
        save:"",},
        
        {id:5,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/A/185010_1638785339.jpg",
        title:"HP Pavilion 11m-ap0023dx X3...",
        price:"₦238,000",
        dp:"",
        save:"",},
        
        {id:6,
            src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/B/192619_1640752967.jpg",
        title:"Lenovo 100e Chromebook 11.6...",
        price:"₦155,000",
        dp:"₦175,000",
        save:"You save ₦20,000",
        discount:"11% OFF",},
        ];

        let YBH = [

            {id:1,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/J/59229_1647437863.jpg",
            title:"Gateway 11.6convertible To...",
            price:"₦150,000",
            dp:"₦160,000",
            save:"You save ₦10,000",
            discount:"6% OFF",},
            
            {id:2,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/V/99659_1623767347.jpg",
            title:"Delite Notebook Mini Laptop...",
            price:"₦145,000",
            dp:"₦155,000",
            save:"You save ₦10,000",
            discount:"6% OFF",},
            
            {id:3,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/Y/140825_1641825311.jpg",
            title:"Dell Mare Pro Backpack For ...",
            price:"₦9,500",
            dp:"",
            save:"",
            discount:"",},
            
            {id:4,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/G/61771_1642929443.jpg",
            title:"Superlife Stc 30Pack Of ...",
            price:"₦12,500",
            dp:"₦33,000",
            save:"You save ₦20,500",
            discount:"",},
            
            {id:5,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/K/118566_1592897938.jpg",
            title:"",
            price:"₦117,500",
            dp:"₦128,080",
            save:"You save ₦10,580",
            discount:"8% OFF",},
            
            {id:6,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/H/160872_1589392938.jpg",
            title:"LGS 43 Full HD LED TV",
            price:"₦88,500",
            dp:"",
            save:"",
            discount:"",},
            
            {id:7,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/V/139721_1636738006.jpg",
            title:"Oraimo 27000mAh Power Trave...",
            price:"₦12,300",
            dp:"₦13,500",
            save:"You save ₦1,200",
            discount:"",},
            
            {id:8,
                src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/A/196854_1651244290.png",
            title:"MTN Hynetflex 4g & Broadban...",
            price:"₦25,000",
            dp:"",
            save:"",
            discount:"",},
            ]
            
            
  return (
    <div className=''>
         <div className='lg:container lg:mx-auto bg-white rounded-lg my-5'>
            <div className="flex p-4 border-b-2 bg-slate-800 rounded-t-lg" >
                <h1 className='mr-8 font-bold text-xl text-white'>Inspired By Your Cart</h1> 
            </div>
            <div className="my-5 flex justify-between lg:container lg:mx-auto bg-white flex-nowrap overflow-auto p-4 rounded">
               {
                   Cart.map((data)=>(
                   <div key={data.id} className="duration-500 transition-all cursor-pointer hover:shadow-lg p-2 py-3 shadow m-2 flex-none">
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
         <div className='lg:container lg:mx-auto bg-white rounded-lg my-5'>
            <div className="flex p-4 border-b-2 bg-slate-800 rounded-t-lg" >
                <h1 className='mr-8 font-bold text-xl text-white'>Your Browsing History</h1> 
            </div>
            <div className="my-5 flex justify-between lg:container lg:mx-auto bg-white flex-nowrap overflow-auto p-4 rounded">
               {
                   YBH.map((data)=>(
                   <div key={data.id} className="duration-500 transition-all cursor-pointer hover:shadow-lg p-2 py-3 shadow m-2 flex-none">
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
        
       
    </div>
  )
}

export default Cart