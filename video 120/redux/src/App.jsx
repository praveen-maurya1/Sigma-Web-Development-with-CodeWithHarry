import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>

        Hey This is counter and it's count is {count}

        <button onClick={() => dispatch(increment())}>+</button>
        <h1>
          <button onClick={() => dispatch(multiply())}>Multiply</button>
        </h1>
      </div>
    </>
  )
}

export default App
