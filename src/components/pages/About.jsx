import React from 'react'
import AboutCard from '../AboutCard'
import aboutProps from '../../assets/aboutProps.jpg'

const About = () => {
  return (
    <div>
      <div className='w-full min-h-screen bg-[#262626]'>
        {/* top portion */}
        <div className='h-[140px] w-full bg-[#262626] flex flex-col justify-center items-center'>
          <h1 className='text-white text-4xl font-semibold '>About Me</h1>
          <div className='h-[4px] w-[95px] rounded bg-gradient-to-r from-[#4081FA] to-[#FA0472] leading-right'></div>
          <p className='text-[#D4D4C4] mt-2'>Get to know me better and see how I can help bring your digital ideas to life.</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-2'>
          <div className='h-[370px] w-[370px] rounded-xl ml-28 bg-amber-50 mt-[120px]'>
            <img src={aboutProps} alt="aboutprops" />
          </div>
          <div className=' min-h-screen bg-[#262626] mr-6'>
            <h1 className='text-white text-[28px] font-semibold '>Full-Stack Mobile & Web Developer</h1>
            <p className='text-white mt-4'>Hi, I'm Rahul Singh, a passionate Full-Stack Developer with over a year of experience creating high-performance applications and intuitive user interfaces. I specialize in both mobile and web development, with expertise across multiple technologies and platforms.</p>
            <p className='text-white mt-4'>My journey in software development has equipped me with the skills to turn complex problems into elegant solutions. I'm committed to writing clean, maintainable code and creating applications that not only look great but perform exceptionally well.</p>
            <h2 className='text-white mt-6 text-xl font-bold'>My Tech Stack</h2>
            <AboutCard/>
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default About
