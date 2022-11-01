import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gerset Linarez | Full stack Developer</title>
        <meta name="description" content="I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
        <meta property="og:title" content="Gerset Linarez" />
        <meta property="og:type" content="Portfolio" />
        <meta property="og:url" content="https://gerset.netlify.app/" />
        <meta property="og:image" content="/fav.png" />
        <meta property="og:description" content="I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences." />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
