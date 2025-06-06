import { Link } from 'react-router-dom';
import Hanimate from '../Hanimate';
import homeImg from '../../assets/homeImg.jpg';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#171717] px-6 sm:px-12 py-12">
      <div className="grid sm:grid-cols-2 gap-6 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-white text-4xl sm:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent">
              Rahul Singh
            </span>
          </h1>

          <h2 className="text-white text-xl sm:text-2xl mt-4 font-semibold">
            Full-stack Mobile & Web Developer
          </h2>

          <h3 className="text-xl font-medium mt-2 bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent">
            React Native Expert
          </h3>

          <p className="text-white mt-6 text-sm sm:text-base">
            Crafting high-performance, visually stunning applications with cutting-edge technologies and sleek UI/UX design.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/about">
              <button className="text-white px-6 py-3 bg-[#2A76EF] rounded-xl hover:scale-105 transition duration-200">
                View My Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="text-white px-6 py-3 border-2 border-pink-600 rounded-xl hover:bg-pink-600 transition duration-200">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="h-[350px] w-[350px] max-w-md rounded-2xl overflow-hidden shadow-lg bg-[#25273F]">
            <img
              src={homeImg}
              alt="Rahul Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Animation Section */}
      <div className="mt-20">
        <Hanimate />
      </div>
    </div>
  );
};

export default Home;
