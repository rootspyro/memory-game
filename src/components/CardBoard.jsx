import PropTypes from 'prop-types'

export default function CardBoard ({ data, name }) {
  return (
    <div className='flex flex-col justify-center items-center w-32 h-15 text-4xl text-secondary'>
      <p>{name}</p>
      <div>{data}</div>

    </div>
  )
}

CardBoard.propTypes = {
  data: PropTypes.any.isRequired,
  name: PropTypes.string
}
