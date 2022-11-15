import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='lg:container lg:mx-auto hidden md:block'>
        <div className="flex justify-between m-3 mb-7">
            <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-800">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Home
                </a>
                </li>
                <li>
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2  ">Computer and Accessories</a>
                </div>
                </li>
                <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-pink-500 md:ml-2">Laptop</span>
                </div>
                </li>
            </ol>
            </nav>
            <p className='text-xs text-gray-400 items-center'>1-40 of 200results</p>
        </div>
        <div className="flex m-3 justify-between items-center">
            <div className="font-semibold text-2xl">
            Mini Laptops And Netbooks
            </div>
            <div className="flex items-center">
                <h3 className='mr-3 text-xs'>Sort by:</h3>
                <div class="inline-flex shadow-sm" role="group">
                <button type="button" class="py-1 px-2 text-sm  border font-thin border-pink-500">
                   Relevance
                </button>
                <button type="button" class="py-1 px-2 text-sm  border font-thin">
                    Price - High To Low
                </button>
                <button type="button" class="py-1 px-2 text-xs  border font-thin">
                Price - Low To High
                </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Header