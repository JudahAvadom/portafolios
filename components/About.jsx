import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications that connect with APIs and other back-end technologies. I am passionate about learning new technologies and understanding that there is more than one way to accomplish a task. Although I am more skilled at building front-end applications using React, Angular, and Vue, I am a fast learner and can pick up new technology stacks as needed. I believe that being a great developer is not about using a specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started web development in 2019 running a small eCommerce website on CMS platforms like WordPress. I have experience working on eCommerce structures, file storage and distribution platforms and scalable applications organized in microservices.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
