import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const TestView = () => {

    const { result, setResult } = useContext(CalcContext)

  return (
    <div>
        {result}
        <button onClick={() => setResult(result + 1)}></button>
    </div>
  )
}

export default TestView