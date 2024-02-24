/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center flex-row justify-between p-2'>
        <div className='flex flex-row'>
        <img 
        className="ml-16 w-8 h-9 object-cover"
        src="https://static.wixstatic.com/media/d9bb7b_93eee87eb38b442ba0d14028a6c8448f~mv2.png/v1/fill/w_34,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20FINAL%20png.png" 
        alt="Logo FINAL png.png" 
        width="34" 
        height="36" 
        srcSet="https://static.wixstatic.com/media/d9bb7b_93eee87eb38b442ba0d14028a6c8448f~mv2.png/v1/fill/w_34,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20FINAL%20png.png" 
        fetchpriority="high"></img>
        <div className='flex flex-col'>
        <h1 className="ml-2 p-0 tracking-[.25em] text-xl font-bold uppercase">soles on wheels</h1>
        <p className="mr-2 text-end font-light capitalize text-xs">the backpacker's hostel</p>
        </div>
        </div>
        <div>
        <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Home</a>
            <div class="relative group">
                <a href="#" class="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Hostels</a>
                <div class="absolute hidden group-hover:block mt-2 py-2 px-4 rounded-lg">
                    <a href="#" class="block uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Munnar</a>
                    <a href="#" class="block uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Vagamon</a>
                </div>
            </div>
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">About Us</a>
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">FAQ's</a>
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Careers</a>
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Contact</a>
           <div class="relative group">
                <a href="#" class="font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">More</a>
                <div class="absolute hidden group-hover:block mt-2 py-2 px-4 rounded-lg">
                    <a href="#" class="block uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Members</a>
                    <a href="#" class="block uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Forum</a>
                    <a href="#" class="block uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Group</a>
                </div>
            </div>
            <a href="#" 
            className="uppercase font-light text-xs hover:text-white text-black text-lg font-bold mr-4 hover:bg-gray-700 py-2 px-4 rounded">Log In</a>
        </div>
        </nav>   
        </div>
    </header>
  )
}
