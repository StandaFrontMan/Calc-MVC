import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const DisplayView = () => {

  const {
    number,
    result
  } = useContext(CalcContext)

  return (
    <div className='displayView'>{number ? number : result}</div>
  )
}

export default DisplayView