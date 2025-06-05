import { Link } from 'react-router-dom';
import Hanimate from '../Hanimate';
import homeImg from '../../assets/homeImg.jpg'


const Home = () => {
  return (
    <div className='min-h-screen w-full bg-[#171717]'>
        <div className='grid sm:grid-cols-2 gap-1'>
            <div className='h-[350px] ml-3 mt-24'>
                <h1 className= 'text-white text-6xl font-bold '>Hi,I'm <span className='text-6xl font-bold bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right'>Rahul Singh</span></h1>
                <h2 className='text-white text-2xl mt-4'>Full-stack Mobile & Web Developer</h2>
                <h3 className='font-medium text-2xl mt-4  bg-gradient-to-r from-[#4081FA] to-[#FA0472] bg-clip-text text-transparent leading-right'>React native Expert</h3>
                <p className='text-white mt-6'>Crafting high-performance, visually stunning applications with cutting-edge technologies and sleek UI/UX design.</p>
                <div className='mt-6'>
                    <Link to='/about'>
                      <button className='text-white p-4 bg-[#2A76EF] mr-4 rounded-xl hover:text-xl'>View my Project</button>
                    </Link>
                    
                    <Link to='/contact'>
                      <button className='text-white p-4 border-2 border-pink-600 rounded-xl'>Contact me</button>
                    </Link>
                </div>

            </div>
            <div className='mt-24 rounded-2xl mr-2 ml-10 h-[350px] w-150 bg-[#25273F]'>
              <img className='rounded-xl' src= {homeImg} alt="homeprops" />
            </div>
        </div>

        <div className='mt-[80px]'>
                <Hanimate/>
            </div>
      
    </div>
  )
}

export default Home
