import React from 'react'
import video from '../assets/video_1.JPG'

export default function Aboutvideo() {
    return (
        <section className='flex w-full h-[70vh] bg-cover bg-center bg-fixed justify-center items-center' style={{ backgroundImage: `url(${video})` }}>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[40px] text-white font-bold md:text-[60px] '>Watch Our Video</h1>
                <span className='text-white w-[70%] text-center text-[15px] md:text-[20px] leading-tight'>The Institute of Business Management, GLA University cultivates a highly-interactive, student-centric and conducive to learning environment that is embedded with state of art instructional methodologies and the development of leadership and life- long learning skills in its students.</span>
                <div className='text-[60px] md:text-[80px] text-white duration-500 hover:-translate-y-2 cursor-pointer max-w-max max-h-max'>
                    <a href="https://www.youtube.com/watch?v=xcDPbbDIfHs&ab_channel=PROFICIOPERSONACLUB" target='_black'>
                        <ion-icon name="play-circle-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </section>
    )
}
