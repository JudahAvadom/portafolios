import Image from 'next/image';
import React from 'react';

import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import Github from '../../public/assets/skills/github1.png';
import Firebase from '../../public/assets/skills/firebase.png';
import NextJS from '../../public/assets/skills/nextjs.png';
import NodeJS from '../../public/assets/skills/nodejs.png';
import Vue from "../../public/assets/skills/vue.png";
import Angular from "../../public/assets/skills/angular.png";
import GraphQL from "../../public/assets/skills/graphql.png";
import Laravel from "../../public/assets/skills/laravel.png";
import Mongo from "../../public/assets/skills/mongo.png";
import Mysql from "../../public/assets/skills/mysql.png";
import Java from "../../public/assets/skills/java.png";
import Spring from "../../public/assets/skills/spring.png";
import Docker from "../../public/assets/skills/docker.png";

const Item = ({ asset, title = '' }) => {
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
    <div id='skills' className='w-full lg:h-screen p-2 pt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <Item asset={Angular} title='Angular' />
          <Item asset={Css} title='CSS' />
          <Item asset={Docker} title='Docker' />
          <Item asset={Firebase} title='Firebase' />
          <Item asset={Github} title='Github' />
          <Item asset={GraphQL} title='GraphQL' />
          <Item asset={Html} title="HTML" />
          <Item asset={Java} title='Java' />
          <Item asset={Javascript} title='Javascript' />
          <Item asset={Laravel} title='Laravel' />
          <Item asset={Mongo} title='MongoDB' />
          <Item asset={Mysql} title='MySQL' />
          <Item asset={NextJS} title='NextJS' />
          <Item asset={NodeJS} title='NodeJS' />
          <Item asset={ReactImg} title='ReactJS' />
          <Item asset={Spring} title='Spring' />
          <Item asset={Tailwind} title='Tailwind' />
          <Item asset={Vue} title='Vue' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
