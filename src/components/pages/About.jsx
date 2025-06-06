import React from 'react';
import AboutCard from '../AboutCard';
import aboutProps from '../../assets/aboutProps.jpg';

const techStack = [
  { name: 'Flutter', color: '#3A83F7', bg: '#3F4E66', initial: 'F' },
  { name: 'React Native', color: '#FF006E', bg: '#663349', initial: 'R' },
  { name: 'Java', color: '#3A83F7', bg: '#3F4E66', initial: 'J' },
  { name: 'Kotlin', color: '#FF006E', bg: '#663349', initial: 'K' },
  { name: 'Laravel', color: '#3A83F7', bg: '#3F4E66', initial: 'L' },
  { name: 'PHP', color: '#FF006E', bg: '#663349', initial: 'P' }
];

const highlights = [
  {
    icon: 'briefcase',
    color: 'blue',
    bg: '#3F4E66',
    title: 'Experience',
    desc: '1+ years in Full-Stack Development'
  },
  {
    icon: 'zap',
    color: 'pink',
    bg: '#511E34',
    title: 'Fast Delivery',
    desc: 'Quick turnaround time on projects'
  },
  {
    icon: 'lightbulb',
    color: 'blue',
    bg: '#3F4E66',
    title: 'Creative Solutions',
    desc: 'Innovative approaches to problems'
  },
  {
    icon: 'clock',
    color: 'pink',
    bg: '#511E34',
    title: 'Timely Support',
    desc: 'Responsive and reliable assistance'
  }
];

const About = () => {
  return (
    <div className='w-full min-h-screen bg-[#262626]'>
      {/* Top Section */}
      <div className='h-[140px] w-full flex flex-col justify-center items-center'>
        <h1 className='text-white text-4xl font-semibold'>About Me</h1>
        <div className='h-[4px] w-[95px] rounded bg-gradient-to-r from-[#4081FA] to-[#FA0472]'></div>
        <p className='text-[#D4D4C4] mt-2'>
          Get to know me better and see how I can help bring your digital ideas to life.
        </p>
      </div>

      {/* Grid Section */}
      <div className='grid sm:grid-cols-2 gap-4 px-6'>
        {/* Left - Image */}
        <div className='h-[370px] w-[370px] mx-auto mt-10 rounded-xl bg-amber-50'>
          <img src={aboutProps} alt="aboutprops" className='rounded-xl' />
        </div>

        {/* Right - About Content */}
        <div className='mt-10'>
          <h1 className='text-white text-[28px] font-semibold'>
            Full-Stack Mobile & Web Developer
          </h1>
          <p className='text-white mt-4'>
            Hi, I'm Rahul Singh, a passionate Full-Stack Developer with over a year of experience
            creating high-performance applications and intuitive user interfaces. I specialize in
            both mobile and web development, with expertise across multiple technologies and platforms.
          </p>
          <p className='text-white mt-4'>
            My journey in software development has equipped me with the skills to turn complex
            problems into elegant solutions. I'm committed to writing clean, maintainable code and
            creating applications that not only look great but perform exceptionally well.
          </p>

          {/* Tech Stack + Highlights */}
          <h2 className='text-white mt-6 text-xl font-bold'>My Tech Stack</h2>
          <AboutCard techStack={techStack} highlights={highlights} />
        </div>
      </div>
    </div>
  );
};

export default About;
