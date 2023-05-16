import React from 'react'

const NumbersSignsView = () => {

    const numbers = [];

    const numbersRender = () => {
        for (let i = 1; i < 10; i++) {
            numbers.push(
                <button
                    key={i}
                    value={i}
                    onClick={() => console.log(`${i} clicked`)}
                >{i}</button>
            )
        }

        return numbers;
    }

  return (
    <div className='numbers'>
        {numbersRender()}

        <button value={'.'}>.</button>
        <button value={0}>0</button>
        <button className='equalsSign'>=</button>
    </div>
  )
}

export default NumbersSignsView