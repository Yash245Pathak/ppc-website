import React from 'react'
import about from '../assets/about.png'

export default function About() {
    return (
        <div className='h-auto flex flex-col relative'>
            <div className='relative md:h-[60vh]'>
                <div className='absolute bg-gradient-to-l from-[#f9e0ad] to-[#f4f4f4b3] left-0 top-[10rem] w-[10rem] hidden md:flex md:min-w-[22rem] h-[3rem]' style={{ borderTopRightRadius: '100px', borderBottomRightRadius: '100px' }}></div>
                <div className='absolute top-[6rem] mx-auto max-w-max md:left-[42%] text-[40px] md:text-[60px] md:top-[4rem] font-bold hidden md:flex' style={{ textShadow: '1px 1px  #8a795d' }}>
                    <h1 className='flex flex-col justify-center items-center mx-auto max-w-max text-[#005999]'> <span className='cursive text-[40px] md:text-[70px]'>Proficio</span> <span className='cursive text-[25px] md:text-[55px]'>Persona</span> <span className='cursive text-[20px] md:text-[45px]'>Club</span> </h1>
                </div>
                <div className='absolute bg-gradient-to-r from-[#a5220f] to-[#f4f4f4b3] right-0 top-[10rem] w-[10rem] hidden md:flex md:min-w-[22rem] h-[3rem]' style={{ borderTopLeftRadius: '100px', borderBottomLeftRadius: '100px' }}></div>
            </div>
            <div className='flex flex-col py-6 gap-y-10 w-full my-10'>
                <div className='bg-gradient-to-l from-[#005999] to-[#00e0feb3] w-[16rem] md:w-[45rem] h-[4rem] px-16 py-4 md:py-0' style={{ borderTopRightRadius: '100px', borderBottomRightRadius: '100px' }}>
                    <h1 className='text-[20px] md:text-[40px] font-bold float-right text-white'>All About PPC</h1>
                </div>
                <div className='w-full md:w-2/3 px-16'>
                    <p className='text-[20px] text-black/50 font-bold'>Proficio Persona Club is the personality development club of GLA University. The Latin word <span className='text-black/70'>"Proficio"</span>  means <span className='text-black/70'>"I advance,make progress, make headway".</span> The word <span className='text-black/70'>"Persona"</span> throws light on the aspect of the character that is presented by the students.The Club focuses on the overall personality development of students.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-y-6'>
                <div className='flex-1 flex justify-center'>
                    <img src={about} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-black px-16 font-bold font-serif text-[30px] md:text-[50px]'>Mission And Visions</h1>
                    <div className='px-16 text-black/50 flex flex-col'>
                        <p className='text-[17px] md:text-[25px] font-semibold'>The mission and visions of Proficio Persona Club are as follows:-</p>
                        <ol className='my-4 flex flex-col gap-y-2 text-[15px] md:text-[20px]' style={{ listStyle: 'disc' }}>
                            <li>To develop a character with professional competence. </li>
                            <li>To help the students discover hidden capabilities.</li>
                            <li>To make students capable of facing the cut- throat competition.</li>
                        </ol>
                        <p className='text-[20px] md:text-[30px] my-6 font-semibold text-left md:full '>So, the club plans and organizes various workshops and training sessions hosted by experts from related industries to enhance communication skills, technical presentations and industrial etiquette.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


//#f9e0ad