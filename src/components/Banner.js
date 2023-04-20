import React from 'react'
import cover from '../assets/cover_1.png'

export default function Banner() {
    return (
        <section>
            <div className='over w-full h-[55vh] md:h-[100vh] relative'>
                <img src={cover} className='w-full md:w-full h-full md:h-full object-cover md:object-fill  absolute mix-blend-overlay' alt="" />
                <div className='absolute bottom-2 md:bottom-6 left-[30%] md:left-[35%]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-[25px] md:text-[55px] cursive text-blue-950 font-bold '>Connect With Us</h1>
                        <div className='flex gap-x-6 pt-3'>
                            <div className='text-[22px] md:text-[35px] text-blue-950 cursor-pointer hover:-translate-y-2 duration-500 ease-in-out'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-blue-950 cursor-pointer hover:-translate-y-2 duration-500 ease-in-out'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-blue-950 cursor-pointer hover:-translate-y-2 duration-500 ease-in-out'>
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-blue-950 cursor-pointer hover:-translate-y-2 duration-500 ease-in-out'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
