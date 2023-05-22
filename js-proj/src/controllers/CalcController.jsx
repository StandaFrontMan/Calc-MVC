import React, { useState } from 'react'
import CalcView from '../views/CalcView'
import { CalcContext } from '../context/CalcContext'

const CalcController = () => {

  const [sign, setSign] = useState('');
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    const numberString = value.toString();
    let numberValue;

    if (numberString === '0' && number === 0) {
      numberValue = '0'
    } else {
      numberValue = Number(number + numberString)
    }

    setNumber(numberValue)

    console.log(numberValue);
  }

  const equalsClickHandler = () => {

    if (result && number) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '/': (a, b) => a / b,
          '*': (a, b) => a * b,
        }
        return result[sign](a, b)
      }

      setResult(
        math(result, number, sign)
      );
      setSign('');
      setNumber(0);
    }
    console.log(result, number);
  }

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setSign(value);
    setResult(!result && number ? number : result);
    setNumber(0)

    console.log(value, result);
  }

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setNumber(!number.toString().includes('.') ? number + value : number)
    console.log(value);
  }

  const resetClickHandler = () => {
    setNumber(0);
    setResult(0);
    setSign('')
  }

  return (
    <div className='caclView'>
      <CalcContext.Provider value={{
          number,
          result,
          numClickHandler,
          equalsClickHandler,
          signClickHandler,
          commaClickHandler,
          resetClickHandler
        }}
      >
        <CalcView/>
      </CalcContext.Provider>
    </div>
  )
}

export default CalcController