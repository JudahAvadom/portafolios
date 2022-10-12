import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import NodeJS from '../public/assets/skills/nodejs.png';

const Item = ({asset, title = ''}) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={asset} width='64px' height='64px' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <Item asset={Html} title="HTML" />
          <Item asset={Css} title='CSS' />
          <Item asset={Javascript} title='Javascript' />
          <Item asset={ReactImg} title='ReactJS' />
          <Item asset={Tailwind} title='Tailwind' />
          <Item asset={Firebase} title='Firebase' />
          <Item asset={Github} title='Github' />
          <Item asset={NextJS} title='NextJS' />
          <Item asset={NodeJS} title='NodeJS' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
