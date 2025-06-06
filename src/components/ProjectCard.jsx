const ProjectCard = ({ icon, title, description, tags, demoLink, githubLink, tech }) => {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg w-full sm:w-[48%] lg:w-[30%] transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Icon & Tech Tag */}
      <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-8 flex items-center justify-center relative">
        <span className="text-white text-4xl">{icon}</span>
        <span className="absolute top-2 right-2 bg-[#1f1f1f] text-white text-xs px-3 py-[2px] rounded-full shadow-sm border border-gray-700">
          {tech}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <h2 className="text-white font-semibold text-xl">{title}</h2>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#2b2b2b] text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between pt-2">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-sm font-medium"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
