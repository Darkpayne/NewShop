import React from 'react'
import { useState } from 'react'
import Laptop from './Laptop';

const Body = () => {
    const [menu, setMenu] = useState(false);
    const toggle = () =>{
        setMenu(!menu);
    }
  return (
    <section className='lg:container lg:mx-auto'>
        <div className="flex ">
            <div className="my-4 sm:basis-1/4 lg:basis-1/6 flex-shrink-0 flex-row mx-2">
                {/* Number 1 */}
                <div className="relative overflow-hidden ">
                    <input type="checkbox"
                    className='
                    
                    peer
                    absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer ' onClick={toggle}
                    />
                    <div className=" h-12 w-full pl-5 flex items-center ">
                        <h1 className='text-lg font-semibold text-gray-700'>Price</h1>
                    </div>
                        {/* arrow function */}
                    <div className='absolute top-3 right-3 text-gray-700 transition-transform duration-500  text-xl peer-checked:rotate-180'>
                       <button>
                            <ion-icon 
                            name={menu ? 'arrow-up-outline' : 'arrow-up-outline'  }></ion-icon>
                       </button> 
                    </div>
                    <div className="border-t-black border"></div>
                    {/* content */}
                    <div className=" overflow-hidden transition-all duration500
                    peer-checked:max-h-0 max-h-40">
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                                Under ₦2000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦20000 - ₦50000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦100000 - ₦200000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦200000 - ₦500000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            Above ₦40000
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                {/* number 2 */}
                <div className="relative overflow-hidden ">
                    <input type="checkbox"
                    className='
                    
                    peer
                    absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer ' onClick={toggle}
                    />
                    <div className=" h-12 w-full pl-5 flex items-center ">
                        <h1 className='text-lg font-semibold text-gray-700'>Price</h1>
                    </div>
                        {/* arrow function */}
                    <div className='absolute top-3 right-3 text-gray-700 transition-transform duration-500  text-xl peer-checked:rotate-180'>
                       <button>
                            <ion-icon 
                            name={menu ? 'arrow-up-outline' : 'arrow-up-outline'  }></ion-icon>
                       </button> 
                    </div>
                    <div className="border-t-black border"></div>
                    {/* content */}
                    <div className=" overflow-hidden transition-all duration500
                    peer-checked:max-h-0 max-h-40">
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                                Under ₦2000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦20000 - ₦50000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦100000 - ₦200000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦200000 - ₦500000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            Above ₦40000
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Number 2 end */}
                {/* number 3 */}
                <div className="relative overflow-hidden ">
                    <input type="checkbox"
                    className='
                    
                    peer
                    absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer ' onClick={toggle}
                    />
                    <div className=" h-12 w-full pl-5 flex items-center ">
                        <h1 className='text-lg font-semibold text-gray-700'>Price</h1>
                    </div>
                        {/* arrow function */}
                    <div className='absolute top-3 right-3 text-gray-700 transition-transform duration-500  text-xl peer-checked:rotate-180'>
                       <button>
                            <ion-icon 
                            name={menu ? 'arrow-up-outline' : 'arrow-up-outline'  }></ion-icon>
                       </button> 
                    </div>
                    <div className="border-t-black border"></div>
                    {/* content */}
                    <div className=" overflow-hidden transition-all duration500
                    peer-checked:max-h-0 max-h-40">
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                                Under ₦2000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦20000 - ₦50000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦100000 - ₦200000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦200000 - ₦500000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            Above ₦40000
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Number 3 end */}
                {/* number 4 */}
                <div className="relative overflow-hidden ">
                    <input type="checkbox"
                    className='
                    
                    peer
                    absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer ' onClick={toggle}
                    />
                    <div className=" h-12 w-full pl-5 flex items-center ">
                        <h1 className='text-lg font-semibold text-gray-700'>Price</h1>
                    </div>
                        {/* arrow function */}
                    <div className='absolute top-3 right-3 text-gray-700 transition-transform duration-500  text-xl peer-checked:rotate-180'>
                       <button>
                            <ion-icon 
                            name={menu ? 'arrow-up-outline' : 'arrow-up-outline'  }></ion-icon>
                       </button> 
                    </div>
                    <div className="border-t-black border"></div>
                    {/* content */}
                    <div className=" overflow-hidden transition-all duration500
                    peer-checked:max-h-0 max-h-40">
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                                Under ₦2000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦20000 - ₦50000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦100000 - ₦200000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦200000 - ₦500000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            Above ₦40000
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Number 4 end */}
                {/* number 5 */}
                <div className="relative overflow-hidden ">
                    <input type="checkbox"
                    className='
                    
                    peer
                    absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer ' onClick={toggle}
                    />
                    <div className=" h-12 w-full pl-5 flex items-center ">
                        <h1 className='text-lg font-semibold text-gray-700'>Price</h1>
                    </div>
                        {/* arrow function */}
                    <div className='absolute top-3 right-3 text-gray-700 transition-transform duration-500  text-xl peer-checked:rotate-180'>
                       <button>
                            <ion-icon 
                            name={menu ? 'arrow-up-outline' : 'arrow-up-outline'  }></ion-icon>
                       </button> 
                    </div>
                    <div className="border-t-black border"></div>
                    {/* content */}
                    <div className=" overflow-hidden transition-all duration500
                    peer-checked:max-h-0 max-h-40">
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                                Under ₦2000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦20000 - ₦50000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦100000 - ₦200000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            ₦200000 - ₦500000
                            </label>
                        </div>
                        </div>
                        <div className="p-2">
                        <div class="flex items-center ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-3 h-4 text-pink-600 border-gray-300 focus:ring-pink-500 "/>
                            <label for="default-radio-1" class="ml-2 text-xs font-normal text-gray-600 ">
                            Above ₦40000
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Number 5 end */}
            </div>
            {/* Laptops */}
            <Laptop />
        </div>
    </section>
  )
}

export default Body