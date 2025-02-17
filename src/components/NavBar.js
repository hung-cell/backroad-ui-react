import logo from '../images/logo.svg'
import pageLinks, { socialLinks } from '../data'

const NavBar = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <button
                  onClick={(e) => scrollToSection(e, link.href)}
                  className='nav-link'
                >
                  {link.text}
                </button>
              </li>
            )
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={link.icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
