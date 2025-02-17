import pageLinks from '../data'
import { socialLinks } from '../data'

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <button
                onClick={(e) => scrollToSection(e, link.href)}
                className='footer-link'
              >
                {link.text}
              </button>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={link.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
