import React from 'react'
import Link from "next/link";
import Layout from '../components/layouts/Layout'
import Image from 'next/image';
import { getAllFilesFrontMatter } from "../lib/mdx"
import { orderByDate } from '../lib/order-by-date';

const Blog = ({ posts }) => {
  return (
    <Layout>
      <div className='pt-24 pb-4'>
        <div className="px-4 grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 py-4">
          {posts.map((post, key) => (
            <div key={key} className="bg-gray-300 rounded-lg shadow-2xl">
              <Link href={post.slug}>
                <h3 className='m-2 text-2xl cursor-pointer hover:text-purple-700'>{post.title}</h3>
              </Link>
              <div className='m-2'>
                <Image 
                  src={post.image}
                  width={400}
                  height={400}
                />
                <p className='text-sm'>{post.date}</p>
                <span className='text-lg'>{post.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");
  const posts = allPosts.sort(orderByDate).slice(0, 10);
  return {
    props: { posts },
  };
}

export default Blog