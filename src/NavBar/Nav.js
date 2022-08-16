import React from 'react'

const Nav = () => {
  const Nav = [
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_travels2.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/kongafood.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_pay.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_drinks.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_health.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_express2.png"},
    {src:"https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_groceries.png"},
  ];
  return (
    <nav className='lg:container lg:mx-auto'>
      <div className='items-center  justify-center flex-wrap flex'>
       {
         Nav.map((img)=>(
           <div className=' w-28 mr-10'>
             <img src={img.src} alt="" className='object-contain p-2' />
           </div>
         ))
       }
      </div>
    </nav>
  )
}

export default Nav