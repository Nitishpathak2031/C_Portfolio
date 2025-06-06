import React from 'react';
import ServiceCard from '../Servicecard';
import { Smartphone, Monitor, Settings, ShoppingCart, Menu, Zap } from 'lucide-react';
import ServiceCard2 from '../ServiceCard2';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#171717] px-4 py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="text-4xl text-white font-semibold">Services</h1>
        <div className="h-[4px] w-[95px] mx-auto mt-2 bg-gradient-to-r from-[#4081FA] to-[#FA0472] rounded"></div>
        <p className="text-white mt-4 max-w-2xl mx-auto">
          Specialized services tailored to meet your digital needs with cutting-edge technologies and expert solutions.
        </p>
      </div>

      {/* First Row of Service Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <ServiceCard
          Icon={Smartphone}
          title="Mobile App Development"
          description="Cross-platform and native mobile applications with beautiful UI and seamless performance."
          tags={['Flutter', 'React Native', 'Java', 'Kotlin']}
          bgColor="bg-[#262626]"
        />
        <ServiceCard
          Icon={Monitor}
          title="Web Development"
          description="Responsive, modern websites and web applications with focus on performance and usability."
          tags={['HTML/CSS', 'JavaScript', 'Laravel', 'PHP']}
          bgColor="bg-[#262626]"
        />
        <ServiceCard
          Icon={Settings}
          title="Custom Software Solutions"
          description="Tailored software solutions designed to address your specific business challenges."
          tags={['API Integration', 'UI/UX Design', 'Database', 'Testing']}
          bgColor="bg-[#262626]"
        />
      </div>

      {/* Second Row of Service Cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <ServiceCard
          Icon={ShoppingCart}
          title="E-Commerce Solutions"
          description="Complete online shopping platforms with secure payment gateways and inventory management."
          tags={['WooCommerce', 'Payment API', 'Security', 'Analytics']}
          bgColor="bg-[#262626]"
        />
        <ServiceCard
          Icon={Menu}
          title="UI/UX Optimization"
          description="Enhance user experience with intuitive interfaces and smooth interactions that boost engagement."
          tags={['Wireframing', 'Prototyping', 'User Testing', 'Animations']}
          bgColor="bg-[#262626]"
        />
        <ServiceCard
          Icon={Zap}
          title="Maintenance & Support"
          description="Ongoing technical support and maintenance to keep your applications running smoothly."
          tags={['Bug Fixes', 'Updates', 'Optimization', 'Consultation']}
          bgColor="bg-[#262626]"
        />
      </div>

      {/* How We Work Section */}
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-semibold text-white">How We Work</h1>
      </div>

      <div className="mt-14 flex flex-wrap gap-6 justify-center">
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

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-6 pt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center">
          Ready to bring your idea to life?
        </h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Services;
