import React from 'react'
import cover from '../assets/cover_1.png'

export default function Banner() {
    return (
        <section>
            <div className='w-full mix-blend-overlay h-[60vh] md:h-[100vh] relative bg-cover md:bg-cover' style={{ backgroundImage: `url(${cover})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className='absolute right-6 top-16 md:top-44'>
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col gap-y-4 pt-3'>
                            <div className='text-[22px] md:text-[35px] text-white cursor-pointer hover:-translate-x-2 duration-500 ease-in-out'>
                                <a href="https://www.facebook.com/pdp.club" target='_black'>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-white cursor-pointer hover:-translate-x-2 duration-500 ease-in-out'>
                                <a href="https://www.instagram.com/pdpglau/?igshid=YmMyMTA2M2Y=" target='_black'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-white cursor-pointer hover:-translate-x-2 duration-500 ease-in-out'>
                                <a href="https://www.linkedin.com/in/proficio-persona-a66356196" target='_black'>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </div>
                            <div className='text-[22px] md:text-[35px] text-white cursor-pointer hover:-translate-x-2 duration-500 ease-in-out'>
                                <a href="https://www.youtube.com/@proficiopersonaclub2760" target='_black'>
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
