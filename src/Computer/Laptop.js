import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Data } from './Data'
import { UseGlobalContext } from '../context';
import { formatCurrency } from '../lib/lib';

const Laptop = () => {

  const {state: {products}, state : {cartItem}, dispatch} = UseGlobalContext();



    const getStars = (num) =>{
      const star0 = [
        {star:"star-outline",},
        {star:"star-outline",},
        {star:"star-outline",},
        {star:"star-outline",},
        {star:"star-outline",},
       ];
    
        const star5 = [
          {star:"star",},
          {star:"star",},
          {star:"star",},
          {star:"star",},
          {star:"star",},
        ];
    
        const star4 = [
          {star:"star",},
          {star:"star",},
          {star:"star",},
          {star:"star",},
          {star:"star-outline",},
        ];
    
        const star3 = [
          {star:"star",},
          {star:"star",},
          {star:"star",},
          {star:"star-outline",},
          {star:"star-outline",},
        ];
    
        const star2 = [
          {star:"star",},
          {star:"star",},
          {star:"star-outline",},
          {star:"star-outline",},
          {star:"star-outline",},
        ];
    
        const star1 = [
          {star:"star",},
          {star:"star-outline",},
          {star:"star-outline",},
          {star:"star-outline",},
          {star:"star-outline",},
        ];
    
      if(num > 5  ){
        return star0.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else if (num == 5){
        return star5.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else if (num == 4){
        return star4.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else if (num == 3){
        return star3.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else if (num == 2){
        return star2.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else if (num == 1){
        return star1.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }else{
        return star0.map((star)=>(
          <span className='flex'><ion-icon name={star.star}></ion-icon></span>
        ))
      }
    }
  return (
    <div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-2 my-8 p-5">
            {
              products.map((data)=>(
                <div key={data.id} className="bg-white rounded hover:shadow-2xl p-5 duration-500 transition-all cursor-pointer">
                  <div className=" flex justify-center items-center relative">
                  <Link to={`/product/${data.id}`}>
                    <img src={data.src} alt="" className='w-48 m-1' />
                  </Link>
                    {data.save && <div className="absolute -top-2 -left-5 rounded-r-lg bg-red-500 text-white text-xs p-1">{data.save}</div>}
                    <button className='absolute -top-2 right-0 text-3xl text-gray-400 hover:text-yellow-400 focus:text-yellow-400'>
                      <ion-icon name="heart-circle-outline"></ion-icon>
                    </button>
                  </div>
                  <div className="">
                      <div className="flex border-b">
                        <h2 className='font-medium m-3'>{data.title}</h2>
                      </div>
                      <div className="border-b">
                        <div className='flex justify-between items-center m-3'>
                        <p className="font-bold text-xl">{formatCurrency(data.price)}</p>
                        {data.dp && <p className="line-through font-thin text-xs">{formatCurrency(data.dp)}</p>}
                        </div>
                        
                      </div>
                      <div className="mx-3 mt-2">
                        <p className='text-xs text-gray-400 truncate'>Sold by <span className='text-blue-700'>{data.sold}</span></p>
                      </div>
                      <div className="mx-3 mt-7 mb-3">
                        <p className='flex items-center text-sm text-gray-400'><span className='flex text-yellow-400'>{getStars(data.stars)}</span><span className=''>(No reviews yet)</span></p>
                      </div>
                  </div>
                  <div className='mt-7'>
                    {
                      cartItem.some(p => p.id === data.id)? (
                        <button onClick={()=>{
                          dispatch({type: "REMOVE_FROM_CART", payload:data})
                        }} className=' w-full my-1 p-1 border-pink-400 border-2 rounded-lg text-white bg-pink-400 hover:text-pink-500 hover:bg-white duration-500 font-bold'>Remove from Cart</button>
                      ) : (data.qty > 0 ? <button  onClick={()=>{
                        dispatch({type: "ADD_TO_CART", payload:data})
                      }}  className=' w-full my-1 p-1 border-pink-400 border-2 rounded-lg text-pink-400 hover:bg-pink-400 hover:text-white duration-500 font-bold'>Add to Cart</button> :  <button className=' w-full my-1 p-1 border-red-600 border-2 rounded-lg text-white bg-red-600  duration-500 font-bold cursor-not-allowed' disabled>Out Of Stock</button>)
                    }
                  </div>
                 
                </div>
                
              ))
            }
        </div>
    </div>
  )
}

export default Laptop