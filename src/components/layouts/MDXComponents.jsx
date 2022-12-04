import React from 'react'

const MDXComponents = {
    a: (props) => <a href={props.href} className='text-purple-800'>{props.children}</a>,
    h1: ({ children }) => <h1 className='p-2 text-3xl'>{children}</h1>,
    h2: ({ children }) => <h2 className='p-2 text-2xl'>{children}</h2>,
    h3: ({ children }) => <h3 className='p-2 text-xl'>{children}</h3>,
    p:({ children }) => <p className='text-lg px-2'>{children}</p>,
    pre: (props) => <pre className={`${props.className} px-2 bg-black rounded-lg`}>{props.children}</pre>,
    code: (props) => <code className={`${props.className}`}>{props.children}</code>,
    span:(props) => <span className={`${props.className} p-2`}>{props.children}</span>,
    ol:(props) => <ol className={`${props.className} p-2 pl-8`}>{props.children}</ol>
}

export default MDXComponents