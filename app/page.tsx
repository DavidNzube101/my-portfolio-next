import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Projects from '../components/Projects'
// Import other components as needed

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Nzube - FullStack Web Developer</title>
        <meta name="description" content="Portfolio of David Nzube, FullStack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Projects />
        <Contact />
        {/* Add other components here */}
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} David Nzube. All rights reserved.</p>
      </footer>
    </div>
  )
}