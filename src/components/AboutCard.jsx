import React from 'react'
import { Rocket, Menu, Search, BaggageClaim, Lightbulb, Briefcase, Zap, Clock } from "lucide-react";

const AboutCard = () => {
  return (
    // the cards of about-section
<div className=''>
    <div className='flex gap-2'>
        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
           <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#3F4E66]'>
            <h3 className='font-semibold text-[#3A83F7] text-xl'>F</h3>
           </div>
           <h1 className='pl-4 text-white pt-1 text-xl'>Flutter</h1>
        </div>

        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
            <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#663349]'>
            <h3 className='font-semibold text-[#FF006E] text-xl'>R</h3>
            </div>
            <h1 className='pl-4 text-white pt-1 text-xl'>React Native</h1>
        </div>

        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
            <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#3F4E66]'>
            <h3 className='font-semibold text-[#3A83F7] text-xl'>J</h3>
            </div>
            <h1 className='pl-4 text-white pt-1 text-xl'>Java</h1>
        </div>
    </div>

    <div className='flex gap-2'>
        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
            <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#663349]'>
            <h3 className='font-semibold text-[#FF006E] text-xl'>K</h3>
            </div>
            <h1 className='pl-4 text-white pt-1 text-xl'>Kotlin</h1>
        </div>

        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
           <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#3F4E66]'>
            <h3 className='font-semibold text-[#3A83F7] text-xl'>L</h3>
           </div>
           <h1 className='pl-4 text-white pt-1 text-xl'>Laravel</h1>
        </div>

        <div className='h-[60px] flex w-53 rounded-xl mt-6 p-2 bg-[#404040]'>
            <div className='h-[40px] flex justify-center items-center w-10 rounded-4xl bg-[#663349]'>
            <h3 className='font-semibold text-[#FF006E] text-xl'>P</h3>
            </div>
            <h1 className='pl-4 text-white pt-1 text-xl'>PHP</h1>
        </div>
    </div>


    <div className='mt-10'>
        <div className='flex'>
            <div className='h-17 w-83 bg-[#262626] p-2 flex'>
                <div className='h-12 w-12 bg-[#3F4E66] rounded-4xl p-3'>
                    <Briefcase className='text-blue-400'/>
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold text-white'>Experience</h2>
                    <p className='text-[#9A9A9A]'>1+ years in Full-Stack Development</p>
                </div>
            </div>

            <div className='h-17 w-83 bg-[#262626] p-2 flex'>
                <div className='h-12 w-12 bg-[#511E34] rounded-4xl p-3'>
                    <Zap className='text-[#FF006E]'/>
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold text-white'>Fast Delivery</h2>
                    <p className='text-[#9A9A9A]'>Quick turnaround time on projects</p>
                </div>
            </div>
        </div>
        {/* third one */}
        <div className='flex'>
            <div className='h-17 w-83 bg-[#262626] p-2 flex'>
                <div className='h-12 w-12 bg-[#3F4E66] rounded-4xl p-3'>
                    <Lightbulb className='text-blue-400'/>
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold text-white'>Creative Solutions</h2>
                    <p className='text-[#9A9A9A]'>Innovative approaches to problems</p>
                </div>
            </div>

            <div className='h-17 w-83 bg-[#262626] p-2 flex'>
                <div className='h-12 w-12 bg-[#511E34] rounded-4xl p-3'>
                    <Clock className='text-[#FF006E]'/>
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold text-white'>Timely Support</h2>
                    <p className='text-[#9A9A9A]'>Responsive and reliable assistance</p>
                </div>
            </div>

            
        </div>

    </div>
    
</div>
  )
}

export default AboutCard
