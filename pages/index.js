import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hey!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid-container'>
        <Header className='grid-item' title="hey!" />
        <p className="grid-item description">
          I'm Razita Nuriyan, but please do call me Zita!! Currently, I'm a final year computer science student at the 
          University of Indonesia, having just recently came back from a semester at the Newcastle University under the IISMA
          (Indonesian International Student Mobility Awards) 2023 scheme. During my study, I've had the chance to explore a broad
          range of subjects related to computing, but my experiences focused on Web Development, Computational Statistics, and High
          Performance Computing. I'm currently doing research on a high-performance molecular dynamics simulator, as I've always 
          been passionate about science for as long as I can remember (I've represented Indonesia in an international astrophysics
          competition in high school and went on to teach astrophysics for 3 years, helping 20++ students win medals at national
          and international levels). I can probably still name the stars at the night sky if we go stargazing 🔭.
        </p>
      </main>

      <Footer />
    </div>
  )
}
