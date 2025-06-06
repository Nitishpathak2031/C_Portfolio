import PropTypes from 'prop-types';

const ServiceCard = ({ Icon, title, description, tags, bgColor = 'bg-blue-600' }) => {
  return (
    <div className={`w-full sm:w-[90%] md:w-[400px] ${bgColor} rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300`}>
      
      {/* Icon */}
      <div className="h-14 w-14 bg-[#3A86FF] p-3 rounded-2xl flex items-center justify-center mb-4">
        <Icon className="text-white w-6 h-6" />
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>

      {/* Description */}
      <p className="text-white text-sm mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-[#404040] text-[#3A86FF] text-xs rounded-xl font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  bgColor: PropTypes.string,
};

export default ServiceCard;
