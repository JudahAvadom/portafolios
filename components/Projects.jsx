import React from 'react';
import ProjectItem from './ProjectItem';
import WhatsappItem from "../public/assets/projects/whatsapp.jpg";
import Cars from "../public/assets/projects/cars.jpg"

const Projects = () => {
  return (
    <div id='projects' className='w-full md:pt-[110px] sm:pt-[10px]'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Whatsapp Clone'
            backgroundImg={WhatsappItem}
            projectUrl='https://github.com/JudahAvadom/whatsapp-clone'
            tech='React Native & Firebase'
          />
          <ProjectItem
            title='Cars Ecommerce'
            backgroundImg={Cars}
            projectUrl='/cars'
            tech='Javascript, Pug & MongoDB'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
