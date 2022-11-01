import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ContactList = [
  {
    link: "https://www.linkedin.com/in/gerset-l-622b1a144/",
    component: <FaLinkedinIn/>
  },
  {
    link:"https://github.com/JudahAvadom",
    component:<FaGithub/>
  }
]

const ContactsButtons = ({ link, icon }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        {icon}
      </div>
    </a>
  )
}

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Gerset Linarez</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building fullstack web and mobile applications
            with the best technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            {ContactList.map((e) => (
              <ContactsButtons link={e.link} icon={e.component}  />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
