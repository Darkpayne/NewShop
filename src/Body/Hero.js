import React from 'react'

const Hero = () => {

    let Links = [
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1641989954/contentservice/blog.png_SyDHPr23t.png"},
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/kongapay2.0.png_H1Nq1pAPO.png"},
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131724/contentservice/konga.%20prime%20copy2.0.png_ryVqJTAw_.png"},
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131733/contentservice/offline%20stores2.0.png_Hy851T0vu.png"},
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/brand%20stores2.0.png_SJH91TCvu.png"},
        {name:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1641989953/contentservice/travel.png_SJDSvShhK.png"},
    ];
  return (
    <div>
        <div className="grid grid-cols-6 grid-rows-2 gap-2 place-items-center px-5">
            <div className="lg:col-span-4 lg:row-span-2 col-span-6 items-center">
                <div className="flex items-stretch">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652023660/contentservice/electronics.gif_rJ7u-PrUc.gif" alt="" className='' />
                </div>
            </div>
           
               <div className="p-4 lg:col-span-1 lg:row-span-1 col-span-3 ">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652269806/contentservice/opay.png_HkBx77t8q.png" alt="" className='rounded-lg' />
                </div>
                <div className="p-4 lg:col-span-1 lg:row-span-1 col-span-3 ">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1648042205/contentservice/ACCESS.gif_SkBkZjdM9.gif" alt="" className='rounded-lg'/>
                </div>
               
                <div className="p-4 lg:col-span-1 lg:row-span-1 col-span-3 ">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1652346558/contentservice/pod.gif_HJpsCr9Uc.gif" alt="" className='rounded-lg '/>
                </div>
                <div className="p-4 lg:col-span-1 lg:row-span-1 col-span-3 ">
                    <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1651137227/contentservice/edo.gif_BJeAq0wSq.gif" alt="" className='rounded-lg'/>
                </div>  
        </div>
        <div className="sm:flex my-5 hidden">
            {
                Links.map((link)=>(
                    <div className="mx-2 bg-white rounded">
                        <img src={link.name} alt="" className='p-2'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Hero