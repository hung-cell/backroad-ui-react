const Title = ({ text, highlightText }) => {
  return (
    <div className='section-title'>
      <h2>
        {text} <span>{highlightText}</span>
      </h2>
    </div>
  )
}
export default Title
