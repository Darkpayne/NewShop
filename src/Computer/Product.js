import React, {useEffect} from 'react'
import Header from './Header'
import Sponsored from '../Body/Sponsored';
import MainNav from '../NavBar/MainNav';
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { UseGlobalContext } from '../context';
import { formatCurrency } from '../lib/lib';


const Product = () => {
  
  const {state : {products},state : {cartItem}, dispatch} = UseGlobalContext();
  
  const {productId} = useParams();

  const product = products.find((prod) =>prod.id === productId);
  const {src,title,price,dp,sold,starts,save,brand,code,fullTitle,qty} = product;


  return (
    <>
    <MainNav />
        <Header />
        
        <section className='bg-gray-200'>
          <div className="lg:container lg:mx-auto p-3">
          <Link to="/computer"><button className='p-2 m-3 my-6 flex justify-center items-center border-2 border-pink-500 rounded text-pink-500 hover:text-white hover:bg-pink-500'>
                            <span className='mr-2'>
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </span> 
                            
                            <span className=''> Continue Shopping</span>
                            
        </button>
        </Link>
              <div className='flex bg-white p-3 rounded'>
              <div className="lg:basis-3/5 md:basis-1/2">
              <div className="flex justify-center items-center">
              <img src={src} alt="" className='p-4'/>
              </div>
            </div>
            
            <div className="lg:basis-2/5 md:basis-1/2">
                <div className="">
                    
                    <div className="my-4 border-b">
                      <h2 className='text-2xl font-medium'>{fullTitle}</h2>

                      <p className='my-3 text-sm text-gray-400'>Product Code: <span className='text-gray-900 font-medium'>{code}</span></p>

                      <p className='my-3 text-sm text-gray-400'>Brand: <span className='text-blue-800 font-medium'>{brand}</span></p>
                    </div>
             
                   
                    <div className=' my-4 border-b'>
                      <div className="flex items-baseline my-4">
                      <h3 className='mr-4  text-2xl font-bold'>{formatCurrency(price)}</h3>
                      { dp && <p className='line-through mr-3 text-sm text-gray-400'>{formatCurrency(dp)}</p>}
                      { save && <p className='text-xs text-green-500 font-bold'>You get {save}</p>}
                      </div>
                      
                    </div>
               
                   
                    <div className='my-4 border-b'>
                      <div className="flex items-center my-5">
                        <p className='text-xs mr-6'>Quantity: </p>
                        <div className="border border-gray-300 rounded">
                          <button  onClick={()=>{
                                                    dispatch({type: "DECREMENT_ITEMS", payload:product})
                                                }}  className='p-1 px-2 border-r'>
                            <ion-icon name="remove-outline"></ion-icon>
                          </button>
                          <span className=' p-1  px-4'>{qty}</span>
                          <button  onClick={()=>{
                                                    dispatch({type: "INCREMENT_ITEMS", payload:product})
                                                }} className='p-1 px-2 border-l'>
                            <ion-icon name="add-outline"></ion-icon>
                          </button>
                        </div>
                      </div>

                      <div className='my-3'>
                        <p className='text-sm text-gray-400'>Call us for bulk purchases:</p>
                        <p className='text-sm font-medium cursor-pointer text-gray-600 '>Click here to show phone number</p>
                      </div>
                    </div>
                   
                     
                      <div className='my-4 border-b'>
                        <div className="grid grid-cols-2 gap-4 my-4">
                         
                       {
                      cartItem.some(p => p.id === productId)? (
                        <button onClick={()=>{
                          dispatch({type: "REMOVE_FROM_CART", payload:product})
                        }} className=' w-full my-1 p-1 border-pink-400 border-2 rounded-lg text-white bg-pink-400 hover:text-pink-500 hover:bg-white duration-500 font-bold'>Remove from Cart</button>
                      ) : (product.qty > 0 ? <button  onClick={()=>{
                        dispatch({type: "ADD_TO_CART", payload:product})
                      }}  className=' w-full my-1 p-1 border-green-400 border-2 rounded-lg text-green-400 hover:bg-green-400 hover:text-white duration-500 font-bold'>Add to Cart</button> :  <button className=' w-full my-1 p-1 border-red-600 border-2 rounded-lg text-white bg-red-600  duration-500 font-bold cursor-not-allowed' disabled>Out Of Stock</button>)
                    }
                          <button className='flex items-center text-gray-400 '>
                            <span className='text-5xl hover:text-yellow-500'>
                              <ion-icon name="heart-circle-outline"></ion-icon>
                              </span> <span className=''> Save for Later</span>
                          </button>
                        </div>
                        <div className="flex bg-gray-200 shadow my-5">
                          <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/Rectangle_81.png" alt="" className='mr-4 '/>

                          <div className="">
                            <p className='text-sm underline text-pink-500 p-3'>Get free delivery on items above N4,599 in LAGOS, ABUJA & PORTHARCOURT</p>
                          </div>
                        </div>

                        <div className="flex items-center my-3">
                        <span className='text-pink-500 text-3xl mr-6'>
                        <ion-icon name="home-outline"></ion-icon>  
                        </span>
                        <p className='text-xs font-medium'>Pickup & Pay on Collection Available</p>
                        </div>
                      </div>
                     
                 
                      <div>
                        <div className=" my-6">
                          <p className='text-sm text-gray-600 my-3'>Share With Friends</p>
                          <div className="flex">
                            <span className='mr-3 text-2xl text-blue-600'>
                          <ion-icon name="logo-facebook"></ion-icon>
                              
                            </span>
                            <span className='mr-3 text-2xl text-blue-300'>
                          <ion-icon name="logo-twitter"></ion-icon>

                            </span>
                            <span className='mr-3 text-2xl text-green-300'>

                          <ion-icon name="logo-whatsapp"></ion-icon>
                            </span>
                          </div>
                        </div>
                      </div>
                   
                </div>
            </div>
            </div>
          
          </div>
        </section>



        <section className='bg-gray-200'>
          <div className="lg:container lg:mx-auto py-5">
            <div className="flex bg-white p-2 items-center">
              <div className="mr-4">
                <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/Rectangle_81.png" alt="" />
              </div>
              <div className="">
                <h2 className='text-lg'>Sold by <span className='text-pink-500 underline font-bold'>
                  {sold}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </section>


        <section className='bg-gray-200 py-5'>
            <Sponsored />
        </section>
        <Footer />
    </>
  )
}

export default Product