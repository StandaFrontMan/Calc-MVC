import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const DisplayView = () => {

  const {
    number,
  } = useContext(CalcContext);

  return (
    <div className='displayView'>{number}</div>
  )
}

export default DisplayView