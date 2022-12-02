import React from 'react'
import Layout from '../components/layouts/Layout'
import Image from 'next/image';

const Blog = () => {
  return (
    <Layout>
      <div className='py-24 justify-center text-center'>
        <h2 className='py-6'>My Blog</h2>
        <Image 
            src="https://cdn.icon-icons.com/icons2/1688/PNG/512/3925407-busy-hourglass-wait-icon_111531.png" 
            width={500}
            height={500}
            className='rounded-xl' 
            alt='about' 
          />
          <h3 className='text-2xl pt-12'>We are working in this section</h3>
      </div>
    </Layout>
  )
}

export default Blog