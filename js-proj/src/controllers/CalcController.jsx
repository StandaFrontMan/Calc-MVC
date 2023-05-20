import React, { useState } from 'react'
import CalcView from '../views/CalcView'
import { CalcContext } from '../context/CalcContext'

const CalcController = () => {

  const [sign, setSign] = useState('');
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const numClickHandler = (i) => {
    // e.preventDefault();
    const value = i;

    if (number.length < 16) {
      setNumber(number === 0 && value === '0' ? '0' : number % 1 === 0 ? Number(number + value) : number + value)
      setResult(!sign ? 0 : result)
    }


    console.log(number);
  }

  const equalsClickHandler = () => {

  }

  const signClickHandler = () => {

  }

  const commaClickHandler = () => {

  }

  const resetClickHandler = () => {
    console.log(number);
  }

  return (
    <div className='caclView'>
      <CalcContext.Provider value={{
        number,
        setNumber,
        
        numClickHandler,
        equalsClickHandler,
        signClickHandler,
        commaClickHandler,
        resetClickHandler
      }}>
        <CalcView />
      </CalcContext.Provider>
    </div>
  )
}

export default CalcController