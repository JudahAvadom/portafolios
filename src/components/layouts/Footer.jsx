import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-300 shadow-xl'>
      <div className='p-6'>
        <nav>
          <ul>
            <li className='py-4'><h2>Gerset Linarez</h2></li>
            <li>
              <a
                href='https://www.linkedin.com/in/gerset-l-622b1a144/'
                target='_blank'
                rel='noreferrer'
                className='flex'
              >
                <FaLinkedinIn size={18} style={{ marginRight: '1rem' }} />Linkedin
              </a>
            </li>
            <li>
              <a
                href='https://github.com/JudahAvadom'
                target='_blank'
                rel='noreferrer'
                className='flex'
              >
                <FaGithub size={18} style={{ marginRight: '1rem' }} />Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Footer