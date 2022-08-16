import React from 'react'

const Sponsored = () => {
    let Data = [
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/E/153964_1575324998.jpg",title:"Focusrite Scarlett 18i20",price:"₦280,000",dp:"₦380,000",save:"You save ₦100,000"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/G/150023_1624788063.jpg",title:"audio Cx12 Monitor Speaker",price:"₦380,000",dp:"",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/Z/91633_1572016980.jpg",title:"Takstar Professional Drum Mic Set Dms",price:"₦90,000",dp:"₦95,000",save:"You save ₦5,500"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/F/91633_1559257735.jpg",title:"The Black Google Tee",price:"₦165,000",dp:"",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/Q/192771_1647786169.jpg",title:"Beam 230 Moving Head Beam Party Light",price:"₦250,000",dp:"",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/U/153964_1618945389.jpg",title:"Led 4 Beam Moving Head Light",price:"₦217,500",dp:"",save:"You save ₦32,500"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/V/178844_1638513961.jpg",title:"Ahuja Wire Microphone With Long Cable",price:"₦217,500",dp:"₦250,000",save:""},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/E/201577_1651149383.jpg",title:"Rechargeable Wireless Head Microphone",price:"₦150,000",dp:"₦100,000",save:"You save ₦32,500"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/U/148116_1614935203.jpg",title:"LED Beam Moving Head Cla42",price:"₦210,000",dp:"",save:"You save ₦2,500"},
        {src:"https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Z/114888_1649879561.jpg",title:"Camera And Sound Systems",price:"₦210,000",dp:"₦250,000",save:"You save ₦32,500"},
    ];
  return (
    <div>
        <div className='lg:container lg:mx-auto bg-white rounded '>
            <div className="flex p-6 border-b-2" >
                <h1 className='mr-8 font-bold text-xl'>Sponsored Products</h1> 
            </div>
            <div className="my-5 flex justify-between lg:container lg:mx-auto bg-white flex-nowrap overflow-auto p-4 rounded">
               {
                   Data.map((data)=>(
                   <div className="duration-500 transition-all cursor-pointer hover:shadow-lg p-2 py-3 shadow m-2 flex-none">
                       <div className="flex justify-center">
                           <img src={data.src} alt="" className='h-48 w-48 ' />
                       </div>
                       <div className="truncate">
                           <h3 className='text-lg'>{data.title}</h3>
                       </div>
                       <div className='flex text-base'>
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

export default Sponsored