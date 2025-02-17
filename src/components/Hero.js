const Hero = () => {
  const scrollToTours = (e) => {
    e.preventDefault()
    const tours = document.getElementById('tours')
    tours?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <button className='btn hero-btn' onClick={scrollToTours}>
          explore tours
        </button>
      </div>
    </section>
  )
}

export default Hero
