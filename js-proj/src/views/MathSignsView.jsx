import React from 'react'

const MathSignsView = () => {

    const operators = ['+', '-', '/', '*'];

  return (
    <div className='mathSigns'>
        {
            operators.flat().map((btn, i) => {
                return (
                    <button
                        key={i}
                        value={btn}
                        onClick={() => console.log(`${btn} clicked`)} // add func
                    >{btn}</button>
                );
            })
        }

        <button onClick={() => console.log('DEL clicked')}>DEL</button>
    </div>
  )
}

export default MathSignsView