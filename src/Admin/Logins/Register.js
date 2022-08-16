import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <div>
        
        <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
              <div
                class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
              >
               <div
          class="p-4 py-6 text-white bg-pink-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
        >
          <div class="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="#">Joshua!</a>
          </div>
          <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
           Welcom to my first real project using react. this shit is not easy at all. but i will try my best.
          </p>
          <p class="flex flex-col items-center justify-center mt-10 text-center">
            <span>Have an account?</span>
            <Link to="/login" class="underline">Login!</Link>
          </p>
          <p class="mt-6 text-sm text-center text-gray-300">
            Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
          </p>
        </div>
                <div class="p-5 bg-white md:flex-1 ">
                  <h3 class="my-4 text-2xl font-semibold text-gray-700">Register</h3>
                  <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                      <label for="email" class="text-sm font-semibold text-gray-500">User Name</label>
                      <input
                        type="text"
                        id="username"
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
                      <input
                        type="email"
                        id="email"
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <label for="email" class="text-sm font-semibold text-gray-500">Password</label>
                      <input
                        type="email"
                        id="email"
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <div class="flex items-center justify-between">
                        <label for="password" class="text-sm font-semibold text-gray-500">Repeat Password</label>
                        
                      </div>
                      <input
                        type="password"
                        id="password"
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-pink-200"
                      />
                    </div>
                   
                    <div>
                      <button
                        type="submit"
                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-md shadow hover:bg-pink-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                      >
                        Sign Up
                      </button>
                    </div>
                    <div class="flex flex-col space-y-5">
                     
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Register