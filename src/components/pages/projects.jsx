import { MessageCircle, WholeWord, Settings2Icon, SearchCheckIcon } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { FaResolving } from "react-icons/fa";
import Line from '../line';
import { SiStaffbase } from 'react-icons/si';

const projects = [
  {
    id: 1,
    icon: <SiStaffbase />,
    title: "StaffTrack",
    description:
      "StaffTrack is a web app for managing employee details with add, edit, delete, and view operations.",
    tags: ["React", "Tailwind", "State Management"],
    demoLink: '#',
    githubLink: "#",
    tech: "React",
  },
  {
    id: 2,
    icon: <SearchCheckIcon />,
    title: "Sorting Visualizer",
    description:
      "An interactive web app that visually demonstrates how sorting algorithms work in real time.",
    tags: ["HTML/CSS", "JavaScript", "DSA"],
    demoLink: "#",
    githubLink: "#",
    tech: "JavaScript",
  },
  {
    id: 3,
    icon: <Settings2Icon />,
    title: "Laptop Price Prediction",
    description:
      "Machine learning model to predict laptop prices using Streamlit interface.",
    tags: ["Machine Learning", "Streamlit", "Algorithm"],
    demoLink: "#",
    githubLink: "#",
    tech: "ML",
  },
  {
    id: 4,
    icon: <FaResolving />,
    title: "AI Code Reviewer",
    description:
      "AI-powered tool that provides feedback and suggestions on code for better quality and performance.",
    tags: ["React", "API Integration", "Node.js"],
    demoLink: "#",
    githubLink: "#",
    tech: "Full Stack",
  },
  {
    id: 5,
    icon: <WholeWord />,
    title: "World Atlas",
    description:
      "Interactive map application displaying countries, flags, and basic information using public APIs.",
    tags: ["React", "API Integration", "Node"],
    demoLink: "#",
    githubLink: "#",
    tech: "React",
  },
  {
    id: 6,
    icon: <MessageCircle />,
    title: "Crypto Wallet",
    description:
      "Secure wallet application for cryptocurrency transactions and real-time balance tracking.",
    tags: ["React Native", "Blockchain", "Security"],
    demoLink: "#",
    githubLink: "#",
    tech: "React Native",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#303030] py-20 px-4 sm:px-10">
      <h1 className="text-white text-4xl font-bold text-center mb-4">
        Projects
      </h1>
      <Line />
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Explore my latest work and see how I bring ideas to life with code and creativity.
      </p>

      <div className="flex flex-wrap gap-8 justify-center items-start">
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
