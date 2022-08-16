import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { UseGlobalContext } from '../context';
import Footer from '../Footer/Footer';
import { formatCurrency } from '../lib/lib';
import MainNav from '../NavBar/MainNav';

const Cart = () => {

    const {state: {cartItem}, dispatch } = UseGlobalContext();

    const [total, setTotal] = useState();

    useEffect(() => {
       setTotal(cartItem.reduce((acc, curr) => acc + Number( curr.price)*curr.qty,0))
    }, [cartItem])


   
  return (
    <div>
        <MainNav />
        <Header />

        <section className='bg-gray-200'>
            <div className="lg:container lg:mx-auto">
                <div className="py-6">
                        <Link to="/computer"><button className='p-2 flex justify-center items-center border-2 border-pink-500 rounded text-pink-500 hover:text-white hover:bg-pink-500'>
                            <span className='mr-2'>
                                <ion-icon name="arrow-back-outline"></ion-icon>
                            </span> 
                            
                            <span className=''> Continue Shopping</span>
                            
                        </button></Link>
                    </div>
                    <div className="">
                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1651851574/contentservice/access.png_rJ64Z6MUc.png" alt="" className=' '/>
                    </div>
                <div className="flex lg:justify-between justify-center ">
                    <div className="lg:basis-3/4 flex-auto">
                       
                        <div className='py-7'>
                            <div className="">
                                <div className="grid grid-cols-6 p-3 bg-gray-300 rounded">
                                    <div className="col-span-3">
                                        <p>Items Detail</p>
                                    </div>
                                    <div className="col-span-2 flex justify-around">
                                        <div className="text-center">
                                            <p>Quality</p>
                                        </div>
                                        <div className="">
                                            <p>Item Price</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <p className='text-end'>Action</p>
                                    </div>
                                </div>
                            </div>
                            {/* items */}
                        <div className='bg-white '>
                        {cartItem.length === 0 && <div className='col-span-6 text-center text-3xl p-3'>Your Cart is Empty</div>}
                        {
                            cartItem.map((item)=>{
                               const {id,src,title,qty,sold,price} = item
                               return (
                                <div key={id} className="grid grid-cols-6 border-b py-3">
                                    <div className="col-span-3">
                                        <div className="flex justify-center items-center">
                                            <div className='self-start'>
                                                <img src={src} alt="" className='w-24 mr-5'/>
                                            </div>
                                            <div>
                                                <p className='truncate text-sm font-medium'>{title}</p>
                                                <p className='text-xs py-2'>Sold by <span className='text-blue-600 font-medium '>{sold}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex justify-around">
                                        <div className="flex">
                                            <div className="flex items-center my-5 flex-shrink-0">
                                                <div className="border border-gray-300 rounded shadow-lg text-gray-400">
                                                <button  onClick={()=>{
                                                    dispatch({type: "DECREMENT_ITEM", payload:item})
                                                }} className='p-1 px-2 border-r'>
                                                    <ion-icon name="remove-outline" ></ion-icon>
                                                </button>
                                                <span className=' p-1  px-4'>{qty}</span>
                                                <button onClick={()=>{
                                                    dispatch({type: "INCREMENT_ITEM", payload:item})
                                                }} className='p-1 px-2 border-l'>
                                                    <ion-icon name="add-outline"></ion-icon>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-2 py-2">
                                            <p className='text-lg font-medium'>{formatCurrency(price)}</p>
                                            <p className='text-xs text-gray-400 font-medium'>{formatCurrency(price)} x {item.qty} item</p>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <div className="text-right p-3">
                                        <button className='text-sm text-red-700 cursor-pointer' onClick={()=>{
                                        dispatch({type: "REMOVE_FROM_CART", payload:item})
                                        }}  >Remove item</button>
                                        <p className='text-sm text-red-700 cursor-pointer'>Save for Later</p>
                                        </div>
                                    </div>
                                </div>
                            )})
                        }
                            {/* items end */}
                            </div>
                        </div>
                    </div>
                    <div className="lg:basis-1/4 lg:block hidden">
                        <div className="py-7 px-5 ">
                            <div className="bg-white">
                                <div className="flex justify-between p-3 border-b">
                                    <p className='text-lg font-medium'>Order Summary</p>
                                    <p className='text-lg font-medium'> <span>{cartItem.length} </span>
                                     Items</p>
                                </div>
                                <div className="flex justify-between p-3 border-b">
                                    <p className='text-xs'>Delivery Charges:</p>
                                    <p className='text-xs text-right'>Add your Delivery address at checkot to see delivery charges</p>
                                </div>
                                <div className="flex justify-between p-3  border-b">
                                    <p>Subtotal</p>
                                    <p>{formatCurrency(total)}</p>
                                </div>
                                <div className="flex justify-between p-3 border-b">
                                    <p>Total</p>
                                    <p>{formatCurrency(total)}</p>
                                </div>
                                <div className=" p-3  border-b">
                                    <div className="relative">
                                        <p className='text-xs  pb-6 text-right text-yellow-500'>Excluding delivery charges</p>
                                    </div>
                                    <button className='w-full bg-green-500 p-1 py-2 rounded text-white uppercase'>continue to checkout</button>
                                </div>
                                <div className=" p-3">
                                    <div className="flex justify-between py-1 items-center text-sm text-gray-400">
                                        <p>we accept: </p>
                                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/mastercard.png" alt="" className='h-3' />
                                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/visacard.png" alt="" className='h-3'/>
                                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/vervecard.png" alt="" className='h-3'/>
                                        <img src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/KongaPay.png" alt="" className='h-3'/>
                                    </div>
                                    <p className='text-sm text-gray-400'>Transaction are 100% Safe and Secure</p>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        <Footer />
    </div>
  )
}

const Header = () => {
    return (
      <div className='lg:container lg:mx-auto'>
          <div className="flex justify-between m-3 p-2">
              <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                  <li class="inline-flex items-center">
                  <a href="#" class="inline-flex items-center text-sm font-medium text-gray-800">
                      <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                      Home
                  </a>
                  </li>
                  <li>
                  
                  </li>
                  <li aria-current="page">
                  <div class="flex items-center">
                      <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                      <span class="ml-1 text-sm font-medium text-pink-500 md:ml-2">Shoping Cart</span>
                  </div>
                  </li>
              </ol>
              </nav>
             
          </div>
          <div className="flex m-3 justify-between items-center">
              <div className="font-bold text-4xl">
              Shopping Cart
              </div>
              
          </div>
      </div>
    )
  }
  

export default Cart