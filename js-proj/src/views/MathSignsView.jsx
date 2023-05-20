import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext';

const MathSignsView = () => {

    const {
        signClickHandler,
        resetClickHandler
    } = useContext(CalcContext)

    const operators = ['+', '-', '/', '*'];

  return (
    <div className='mathSigns'>
        {
            operators.flat().map((btn, i) => {
                return (
                    <button
                        key={i}
                        value={btn}
                        onClick={() => signClickHandler} // add func
                    >{btn}</button>
                );
            })
        }

        <button onClick={() => resetClickHandler}>DEL</button>
    </div>
  )
}

export default MathSignsView