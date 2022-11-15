import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    let Links = [
        {id:1,
            name:"Electronics"},
        {id:2,
            name:"Konga Fashion"},
        {id:3,
            name:"Home and Kitchen"},
        {id:4,
            name:"Baby,Kids and Toy"},
        {id:5,
            name:"Office and Workspace"},
        {id:5,
            name:"Other Categories"},
    ]
  return (
    <nav className='overflow-hidden'>
        <div className="lg:container lg:mx-auto">
           <ul className="flex text-white justify-around">
           <li className='shrink-0 p-1 text-sm  py-2 hover:bg-white hover:text-pink-600 cursor-pointer'><Link to="/">All Categories  <span className=''>
               <ion-icon name="menu" ></ion-icon>
           </span></Link></li>
           <li className='shrink-0 p-1 text-sm  py-2 hover:bg-white hover:text-pink-600 cursor-pointer'><Link to="/computer">Computers and Accessories</Link></li>
           
          
               {
                   Links.map((link)=>(
                       <li key={link.id} className= 'shrink-0 p-1 text-sm  py-2 hover:bg-white hover:text-black cursor-pointer'><a href="#">{link.name}</a></li>
                   ))
               }
           </ul>
        </div>
    </nav>
  )
}

export default Navigation