import React from 'react'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children, title = '', description = '' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/fav.png" />
                <meta property="og:title" content="Gerset Linarez" />
                <meta property="og:type" content="Portfolio" />
                <meta property="og:url" content="https://gerset.netlify.app/" />
                <meta property="og:image" content="/fav.png" />
                <meta property="og:description" content="I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences." />
            </Head>
            {children}
            <Footer />
        </>
    )
}

export default Layout