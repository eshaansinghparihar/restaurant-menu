/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FacebookRounded, Instagram, Twitter, Pinterest, YouTube } from '@mui/icons-material'
import { color } from "./config/constants"

function Footer() {
  return (
  <footer className='flex flex-col md:flex-row justify-around bg-blue-800 text-white font-light'>
  <div className='flex flex-col mt-4 md:mt-0 md:w-1/2'>
    <h1 className='font-bold text-2xl tracking-[0.25em] uppercase '>useful links</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <a href="#" class="text-white p-4 rounded-lg">Guest Policy</a>
      <a href="#" class="text-white p-4 rounded-lg">T & C</a>
      <a href="#" class="text-white p-4 rounded-lg">About Us</a>
      <a href="#" class="text-white p-4 rounded-lg">Privacy Policy</a>
      <a href="#" class="text-white p-4 rounded-lg">Careers</a>
      <a href="#" class="text-white p-4 rounded-lg">Contact Us</a>
      <a href="#" class="text-white p-4 rounded-lg">Cookie Policy</a>
      <a href="#" class="text-white p-4 rounded-lg">FAQ's</a>
    </div>
    <div className='flex flex-col md:flex-row gap-4 mt-4'>
      <a href="#" class="text-white p-4 rounded-lg">Destinations</a>
      <a href="#" class="text-white p-4 rounded-lg">COVID-19 FAQ's</a>
    </div>
  </div>

  <div className='flex flex-col mt-4 md:w-1/4'>
    <h1 className='font-bold text-2xl tracking-[0.25em] uppercase mb-4'>subscribe</h1>
    <div className='flex flex-col md:flex-row'>
    <form action="" className='flex flex-col'>
      <label htmlFor="fullName" className='mb-2'>Full Name*</label>
      <input className='p-4 bg-gray-100 text-gray-800 mb-2 rounded-lg border-gray-300' id="fullName" placeholder='Full Name*'/>
      <label htmlFor="lastName" className='mb-2'>Last Name*</label>
      <input className='p-4 bg-gray-100 text-gray-800 rounded-lg border-gray-300' id="lastName" placeholder='Last Name*'/>
    </form>
    </div>
    <div className='flex flex-row mt-4'>
        <input type="checkbox"/>
        <p className='ml-2 capitalize'>I accept terms and conditions</p>
    </div>
  </div>

  <div className='flex flex-col mt-4 md:w-1/4'>
    <h1 className='font-bold text-2xl tracking-[0.25em] uppercase '>social</h1>
    <div className='flex flex-row justify-around mt-4'>
    <ul className='flex flex-row justify-between mt-4 gap-4'>
      <li><button><FacebookRounded sx={{ color:`${color.secondary}` }} /></button></li>
      <li><button><Instagram sx={{ color:`${color.secondary}` }} /></button></li>
      <li><button><Twitter sx={{ color:`${color.secondary}` }} /></button></li>
      <li><button><YouTube sx={{ color:`${color.secondary}` }} /></button></li>
      <li><button><Pinterest sx={{ color:`${color.secondary}` }} /></button></li>
    </ul>
    </div>
  </div>
</footer>
  )
}

export default Footer