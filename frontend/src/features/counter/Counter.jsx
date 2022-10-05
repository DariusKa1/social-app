import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { decrement, divideByAmount, increment, incrementByAmount, reset } from './counterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const {count} = useSelector((state) => state.counter)
    const [amount, setAmount] = useState(0) 

    const addValue = Number(amount) || 0;

    const resetAll = () => {
        setAmount(0)
        dispatch(reset())
    }
  return (
    <section>
        <h1>{count}</h1>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={() => dispatch(divideByAmount(addValue))}>Divide</button>
            <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter