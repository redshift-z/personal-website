import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { BsLinkedin, BsGithub, BsInstagram, BsMedium, BsEnvelopeAt} from "react-icons/bs";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hey!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-2 gap-10'>
        <Image
          src="/me.jpg"
          width={580}
          height={580}
          alt="Picture of the author"
          className='intro-pic'
        />
        <div>
          <Header title="hey!"/>
          <p className="description">
            I'm <b>Razita Nuriyan</b>, but please do call me <b>Zita</b>!! Currently, I'm a Jakarta-based final year <b>Computer 
            Science </b> student at the University of Indonesia, having just recently came back from a semester at the Newcastle 
            University under the IISMA (Indonesian International Student Mobility Awards) 2023 scheme. During my study, I've had 
            the chance to explore a broad range of subjects related to computing, but my experiences focused on <b>Web Development</b>, 
            <b> Computational Statistics</b>, and <b>High Performance Computing</b>. I'm currently doing research on a high-performance 
            molecular dynamics simulator, as I've always been passionate about science for as long as I can remember (I've 
            represented Indonesia in an international astrophysics competition in high school and went on to teach <b>astrophysics </b> 
            for 3 years, helping 20++ students win medals at national and international levels). I can probably still name the stars 
            at the night sky if we go stargazing 🔭.
          </p>
          <div className='grid grid-cols-5 gap-20'>
            <a href='https://www.linkedin.com/in/razita-afrina-nuriyan/' target="_blank" rel="noopener noreferrer">
              <BsLinkedin className='intro-icon' />
            </a>
            <a href='https://github.com/redshift-z' target="_blank" rel="noopener noreferrer">
              <BsGithub className='intro-icon' />
            </a>
            <a href='https://www.instagram.com/redshift.z/' target="_blank" rel="noopener noreferrer">
              <BsInstagram className='intro-icon' />
            </a>
            <a href='https://medium.com/@razita.afrina' target="_blank" rel="noopener noreferrer">
              <BsMedium className='intro-icon' />
            </a>
            <a href='mailto:razita.afrina@gmail.com' target="_blank" rel="noopener noreferrer">
              <BsEnvelopeAt className='intro-icon'/>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
