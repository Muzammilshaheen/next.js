import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div 
      id='Hero'
      className='min-h-screen bg-no-repeat bg-[url(/mr.png)] bg-left lg:bg-[15%] bg-cover'
      style={{ backgroundSize: "25%" }}
    >
      <Navbar />
    </div>
  );
}

export default Hero;
