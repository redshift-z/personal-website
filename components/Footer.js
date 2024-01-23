import { BsLinkedin, BsGithub, BsInstagram, BsMedium, BsEnvelopeAt} from "react-icons/bs";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className='copyright'>© 2024 <b>Razita Nuriyan</b>. All rights reserved.</div>
      </footer>
    </>
  )
}
