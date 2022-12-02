import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Layout from '../components/layouts/Layout';

const resume = () => {
  return (
    <Layout title='Gerset Linarez | Full stack Developer' description='I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences.'>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Gerset Linarez</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/gerset-l-622b1a144/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/JudahAvadom'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Fullstack Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Fullstack Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative and motivated web and mobile development professional with experience in customer service, team leadership and organizational effectiveness in challenging and fast-paced environments. Expert in developing strategies and driving optimized operations. Diverse analytical skills, team collaboration and relationship building. Accomplished professional and motivated leader, with strong interpersonal skills and complex problem solving skills. Effective and proven track record of critical thinking, idea generation and optimization of efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Angular
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            321Iginion
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Front End Web Developer (2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Efficient management of different eCommerces
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Cuemby
            </span>
            <span className='px-2'>|</span>Remote
          </p>
          <p className='py-1 italic'>Fullstack developer (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developer of communication platforms for the medical sector
            </li>
            <li>
              Bilingual teamwork, solution and implementation of features related to storage, databases and deployment
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default resume;
