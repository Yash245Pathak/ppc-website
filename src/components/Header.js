import React, { useState } from 'react'
import logo from '../assets/ppcLogo.png'

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <section className='w-full bg-white text-[darkblue] py-4 shadow-2xl sticky top-0 z-50'>
            <div className='flex justify-between items-center relative'>
                <div className='text-[30px] pl-6 md:pl-16 font-bold hover:scale-110 transition-all duration-500 cursor-pointer'>
                    <img className='w-[10rem] p-0 m-0' src={logo} alt="" />
                </div>
                <div className={`md:flex md:static md:gap-x-10 md:py-0 md:flex-row md:max-w-max md:items-center absolute w-full top-28 left-0 py-10 px-16 bg-white flex flex-col gap-y-10 ease-in-out duration-700 font-medium ${open ? "translate-y-[-2000px]" : "translate-y-[0]"} md:translate-y-0 md:duration-0`}>
                    <span className='text-[15px] md:text-[18px] cursor-pointer hover:scale-110 transition-all duration-500'>Home</span>
                    <span className='text-[15px] md:text-[18px] cursor-pointer hover:scale-110 transition-all duration-500'>About US</span>
                    <span className='text-[15px] md:text-[18px] cursor-pointer hover:scale-110 transition-all duration-500'>Showcase</span>
                    <span className='text-[15px] md:text-[18px] cursor-pointer hover:scale-110 transition-all duration-500'>Teams</span>
                    <span className='text-[15px] md:text-[18px] cursor-pointer hover:scale-110 transition-all duration-500'>Alumni Corner</span>
                    <button className='btn'>Join US</button>
                </div>
                <div className='text-[30px] md:hidden cursor-pointer pr-6 md:pr-16' onClick={()=> setOpen(!open)}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
            </div>
        </section>
    )
}
