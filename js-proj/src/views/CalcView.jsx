import React from 'react'
import DisplayView from './DisplayView'
import MathSignsView from './MathSignsView'
import NumbersSignsView from './NumbersSignsView'

const CalcView = () => {
  return (
    <div>
        <DisplayView />
        <MathSignsView />
        <NumbersSignsView />
    </div>
  )
}

export default CalcView