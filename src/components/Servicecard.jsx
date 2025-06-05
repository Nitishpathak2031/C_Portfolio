import PropTypes from 'prop-types';
const ServiceCard = ({ Icon, title, description, tags, bgColor = 'bg-blue-600' }) => {
  return (
    <div className={`h-[380px] w-[400px] ml-8 ${bgColor} rounded-xl pt-1`}>
      <div className='h-16 w-16 mt-8 ml-41 bg-[#3A86FF] p-5 rounded-3xl'>
        <Icon className='text-white' />
      </div>
      <h1 className='text-2xl ml-8 mt-4 text-white font-bold'>{title}</h1>
      <p className='p-2 pl-4 pt-3 pb-4 text-white'>{description}</p>
      <div className='flex flex-wrap justify-center items-center gap-4 h-auto p-4 mt- rounded-xl'>
        {tags.map((tag, idx) => (
          <button
            key={idx}
            className='h-10 w-40 text-[#3A86FF] bg-[#404040] rounded-xl font-semibold'
          >
            {tag}
          </button>
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
