import Title from './Title'
import { services } from '../data.js'
const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title text='our' highlightText='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return (
            <article key={service.id} className='service'>
              <span className='service-icon'>
                <i className={service.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{service.title}</h4>
                <p className='service-text'>{service.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
