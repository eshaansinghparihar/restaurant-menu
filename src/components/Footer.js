/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FacebookRounded, Instagram, Twitter, Pinterest, YouTube } from '@mui/icons-material'
import { color } from "./config/constants"

function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row justify-around bg-gray-900 text-white font-light flex-grow '>
    <div className='flex flex-col mt-4'>
        <h1 className='font-bold text-2xl tracking-[0.25em] uppercase '>useful links</h1>
        <div class="grid grid-cols-3 gap-4">
        <a href="#" class="text-white p-4 rounded-lg">Guest Policy</a>
        <a href="#" class="text-white p-4 rounded-lg">T & C</a>
        <a href="#" class="text-white p-4 rounded-lg">About Us</a>
        <a href="#" class="text-white p-4 rounded-lg">Privacy Policy</a>
        <a href="#" class="text-white p-4 rounded-lg">Careers</a>
        <a href="#" class="text-white p-4 rounded-lg">Contact Us</a>
        <a href="#" class="text-white p-4 rounded-lg">Cookie Policy</a>
        <a href="#" class="text-white p-4 rounded-lg">FAQ's</a>
        </div>
        <div className='flex flex-row gap-12 mt-4'>
        <a href="#" class="text-white p-4 rounded-lg">Destinations</a>
        <a href="#" class="text-white p-4 rounded-lg">COVID-19 FAQ's</a>
        </div>
    </div>
    <div className='flex flex-col mt-4'>
    <h1 className='font-bold text-2xl tracking-[0.25em] uppercase mb-4'>subscribe</h1>
        <div className='flex flex-row justify-center lg:justify-start'>
        <div className='flex flex-col'>
        <input className='p-4 bg-gray-100 text-gray-800 mb-2 rounded-lg border-gray-300' placeholder='Full Name*'/>
        <input className='p-4 bg-gray-100 text-gray-800 rounded-lg border-gray-300' placeholder='Last Name*'/>
        </div>
        </div>
    <div className='flex flex-row mt-4 justify-center lg:justify-start'>
    <input type="checkbox"/>
    <p className='ml-2 capitalize'>I accept terms and conditions</p>
    </div>
    </div>
    <div className='flex flex-col mt-4'>
    <h1 className='font-bold text-2xl tracking-[0.25em] uppercase '>social</h1>
    <div className='flex flex-row justify-between mt-4 gap-4 mb-4 p-4 lg:p-0'>
    <button><FacebookRounded sx={{ color:`${color.secondary}` }}/></button>
    <button><Instagram sx={{ color:`${color.secondary}` }}/></button>
    <button><Twitter sx={{ color:`${color.secondary}` }}/></button>
    <button><YouTube sx={{ color:`${color.secondary}` }}/></button>
    <button><Pinterest sx={{ color:`${color.secondary}` }}/></button>
    </div>
    </div>
</footer>
  )
}

export default Footer