import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext';

const NumbersSignsView = () => {

    const {
        numClickHandler,
        commaClickHandler,
        equalsClickHandler
    } = useContext(CalcContext);

    const numbers = [];

    const numbersRender = () => {
        for (let i = 1; i < 10; i++) {
            numbers.push(
                <button
                    key={i}
                    value={i}
                    onClick={(e) => numClickHandler(e)} //пиши функции ждя кнопок 
                >{i}</button>
            )
        }

        return numbers;
    }

  return (
    <div className='numbers'>
        {numbersRender()}

        <button
            value={'.'}
            onClick={(e) => commaClickHandler(e)}
        >.</button>
        <button
            value={0}
            onClick={(e) => numClickHandler(e)}
        >0</button>
        <button
            className='equalsSign'
            onClick={() => equalsClickHandler()}
        >=</button>

    </div>
  )
}

export default NumbersSignsView