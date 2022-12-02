import About from '../components/About'
import Layout from '../components/layouts/Layout'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <Layout title='Gerset Linarez | Full stack Developer' description='I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences.'>
      <Main />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}
