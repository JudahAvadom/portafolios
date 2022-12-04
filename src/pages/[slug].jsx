import React from 'react'
import Layout from '../components/layouts/Layout'
import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../lib/mdx";
import MDXComponents from '../components/layouts/MDXComponents'

export default function Post({ source, frontmatter }) {
    console.log(source);
    return (
        <Layout title={frontmatter.title}>
            <div className='py-24 px-2'>
                <MDXRemote {...source} components={MDXComponents} />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const posts = await getFiles("posts");
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug("posts", params.slug);
    return {
        props: {
            source,
            frontmatter: {
                slug: params.slug,
                ...frontmatter,
            },
        },
    };
}