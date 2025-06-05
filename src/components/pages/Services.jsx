import React from 'react'
import ServiceCard from '../Servicecard'
import { Smartphone, Monitor, Settings, ShoppingCart, Menu, Zap } from 'lucide-react';
import ServiceCard2 from '../ServiceCard2';

const Services = () => {
  return (
    <div className='min-h-screen bg-[#171717]'>
      
      <div className='h-34 bg-[#171717] flex flex-col items-center pt-6'>
        
          <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-white font-semibold'>Services</h1>
          <div className='h-[4px] w-[95px] rounded bg-gradient-to-r from-[#4081FA] to-[#FA0472] leading-right'></div>
          <p className='text-white mt-2 mb-10'>Specialized services tailored to meet your digital needs with cutting-edge technologies and expert solutions.</p>
          </div>
        <div className='h-auto w-full bg-[#171717] flex justify-center'>
               
          <ServiceCard
            Icon={Smartphone}
            title='Mobile App Development'
            description='Cross-platform and native mobile applications with beautiful UI and seamless performance.'
            tags={['Flutter', 'React Native', 'Java', 'Kotlin']}
            bgColor='bg-[#262626]'
          />

          <ServiceCard
            Icon={Monitor}
            title='Web Development'
            description='Responsive, modern websites and web applications with focus on performance and usability.'
            tags={['HTML/CSS', 'JavaScript', 'Laravel', 'PHP ']}
            bgColor='bg-[#262626]'
          />

          <ServiceCard
            Icon={Settings}
            title='Custom Software Solutions'
            description='Tailored software solutions designed to address your specific business challenges.'
            tags={['API Intrigation', 'UI/UX Design', 'DataBase', 'Testing']}
            bgColor='bg-[#262626]'
          />
          </div>

          <div className='mt-20 h-auto w-full justify-center flex bg-[#171717]'>
            <ServiceCard
            Icon={ShoppingCart}
            title='E-Commerce Solutions'
            description='Complete online shopping platforms with secure payment gateways and inventory management.'
            tags={['WooCommerce', 'Payment API', 'Security', 'Analytics']}
            bgColor='bg-[#262626]'
           />

           <ServiceCard
            Icon={Menu}
            title='UI/UX Optimization'
            description='Enhance user experience with intuitive interfaces and smooth interactions that boost engagement.'
            tags={['Wireframing', 'Prototyping', 'User Testing', 'Animations']}
            bgColor='bg-[#262626]'
           />

           <ServiceCard
            Icon={Zap}
            title='Maintenance & Support'
            description='Ongoing technical support and maintenance to keep your applications running smoothly.'
            tags={['Bug Fixes', 'Updates', 'Optimization', 'Consultation']}
            bgColor='bg-[#262626]'
           />
          </div>

          <div className='min-h-screen bg-[#171717] w-full'>
            <div className='flex justify-center mt-10'>
              <h1 className='text-2xl font-semibold text-white'>How we Work</h1>
            </div>
            <div className='mt-14 flex gap-6 flex-wrap justify-center'>
              <ServiceCard2
               number="1"
               title="Discovery"
               description="Understanding your requirements and project goals through in-depth consultations."
              />

              <ServiceCard2
               number="2"
               title="Planning"
               description="Creating a roadmap with milestones, technologies, and design specifications."
              />

              <ServiceCard2
               number="3"
               title="Development"
               description="Building your solution with clean code and regular progress updates."
              />

              <ServiceCard2
               number="4"
               title="Delivery"
               description="Testing, refining, and launching your product with ongoing support."
              />
            </div>
            <div className='flex flex-col pt-12 gap-6 items-center'>
               <h2 className='text-4xl font-semibold text-white'>Ready to bring your idea to life?</h2>
               <button className='text-white bg-blue-500 h-14 rounded w-34 '>Get Started</button>
            </div>
          </div>
      </div> 
    </div>
  )
}

export default Services
