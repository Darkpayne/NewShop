import React from 'react'

const Recommend = () => {
    let Goods = [
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/E/84999_1608149428.jpg",title:"Delite Notebook Mini Laptop Slim",price:"₦145,000",dprice:"₦155,000",save:"You save ₦10,000"},
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/M/119927_1616489455.jpg",title:"Asus Mini 11.6 Intel Celeron 4GB RAM",price:"₦152,000",dprice:"₦155,000",save:""},
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/W/149849_1622200166.jpg",title:"Lenovo Amd 14 8GB RAM Ddr4",price:"₦177,000",dprice:"₦277,000",save:"You save ₦10,000"},
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/A/185010_1638785339.jpg",title:"HP Pavilion 11m-ap0023dx X360",price:"₦238,000",dprice:"",save:"You save ₦10,000"},
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/K/119927_1617291696.jpg",title:"HP Pavilion X360 15.6",price:"₦485,000",dprice:"",save:""},
        {img:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/I/59340_1642018588.jpg",title:"HP Chromebook 14-db0002ca ",price:"₦180,000",dprice:"",save:"You save ₦20,000"},
    ];
    let Images = [
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023651/contentservice/phone.png_r1qPZDHL5.png"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023659/contentservice/game.png_HkyuWPH89.png"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023658/contentservice/tablet.png_H1eubPHLq.png"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023659/contentservice/appliance.png_rybO-vBU5.png"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023652/contentservice/laptop.png_SkKvbvrIq.png"},
        {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023658/contentservice/comp%20access.png_SyiP-vS8c.png"},
    ];
  return (
      <>
        <div className='lg:container lg:mx-auto bg-white rounded '>
            <div className="flex p-6 border-b-2" >
                <h1 className='mr-8 font-bold text-xl'>Recommended for you</h1> <p className='hover:underline cursor-pointer text-pink-400'>See All Items</p>
            </div>
       
            <div className="grid grid-cols-3 gap-3 my-5 p-8 ">
               {
                   Goods.map((item)=>(
                       <div className="flex items-center shadow hover:shadow-lg p-5 hover:-translate-y-1 duration-500 transition-all cursor-pointer">
                           <div className="">
                               <img src={item.img} alt="" className='lg:h-36 h-32 p-1'/>
                           </div>
                           <div className="truncate">
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
        <div className="my-5 flex justify-between lg:container lg:mx-auto bg-white flex-nowrap lg:overflow-hidden overflow-auto p-4 rounded">
            {
                Images.map((link)=>(
                    <div className="p-2 rounded-md lg:flex-auto flex-none">
                        <img src={link.src} alt="" className='h-52' />
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Recommend