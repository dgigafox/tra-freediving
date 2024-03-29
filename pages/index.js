import Head from 'next/head'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import About from '../components/about'
import Team from '../components/team'
import Testimonials from '../components/testimonial'
import Content from '../components/content'
import CTA from '../components/cta'
import Footer from '../components/footer'
import FAQ from '../components/faq'
import Contact from '../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>TRA Freediving</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation></Navigation>
        <Hero></Hero>
        <About></About>
        <Team></Team>
        <Testimonials></Testimonials>
        <CTA></CTA>
        <Content></Content>
        <FAQ></FAQ>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  )
}
