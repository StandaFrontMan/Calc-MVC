import React from 'react'
import DisplayView from './DisplayView'
import MathSignsView from './MathSignsView'
import NumbersSignsView from './NumbersSignsView'
import TestView from './TestView'

const CalcView = () => {
  return (
    <div>
        <DisplayView />
        <MathSignsView />
        <NumbersSignsView />
        <TestView />
    </div>
  )
}

export default CalcView