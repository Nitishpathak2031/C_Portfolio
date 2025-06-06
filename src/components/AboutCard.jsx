import React from 'react';
import { Briefcase, Zap, Lightbulb, Clock } from "lucide-react";

const techStack = [
  { name: 'Flutter', color: '#3A83F7', bg: '#3F4E66', initial: 'F' },
  { name: 'React Native', color: '#FF006E', bg: '#663349', initial: 'R' },
  { name: 'Java', color: '#3A83F7', bg: '#3F4E66', initial: 'J' },
  { name: 'Kotlin', color: '#FF006E', bg: '#663349', initial: 'K' },
  { name: 'Laravel', color: '#3A83F7', bg: '#3F4E66', initial: 'L' },
  { name: 'PHP', color: '#FF006E', bg: '#663349', initial: 'P' },
];

const highlights = [
  {
    icon: <Briefcase className='text-blue-400' />,
    bg: 'bg-[#3F4E66]',
    title: 'Experience',
    desc: '1+ years in Full-Stack Development'
  },
  {
    icon: <Zap className='text-[#FF006E]' />,
    bg: 'bg-[#511E34]',
    title: 'Fast Delivery',
    desc: 'Quick turnaround time on projects'
  },
  {
    icon: <Lightbulb className='text-blue-400' />,
    bg: 'bg-[#3F4E66]',
    title: 'Creative Solutions',
    desc: 'Innovative approaches to problems'
  },
  {
    icon: <Clock className='text-[#FF006E]' />,
    bg: 'bg-[#511E34]',
    title: 'Timely Support',
    desc: 'Responsive and reliable assistance'
  }
];

const AboutCard = () => {
  return (
    <div className='mt-4'>

      {/* Tech Stack */}
      <div className='grid sm:grid-cols-3 gap-4'>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className='flex items-center bg-[#404040] rounded-xl p-3 h-[60px]'
          >
            <div
              className={`h-[40px] w-[40px] rounded-full flex items-center justify-center`}
              style={{ backgroundColor: tech.bg }}
            >
              <h3 className='font-semibold text-xl' style={{ color: tech.color }}>
                {tech.initial}
              </h3>
            </div>
            <h1 className='text-white text-xl pl-4'>{tech.name}</h1>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className='grid sm:grid-cols-2 gap-6 mt-10'>
        {highlights.map((item, index) => (
          <div key={index} className='flex bg-[#262626] p-4 rounded-xl items-center'>
            <div className={`h-12 w-12 rounded-full flex items-center justify-center ${item.bg}`}>
              {item.icon}
            </div>
            <div className='ml-4'>
              <h2 className='text-xl font-semibold text-white'>{item.title}</h2>
              <p className='text-[#9A9A9A]'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutCard;
