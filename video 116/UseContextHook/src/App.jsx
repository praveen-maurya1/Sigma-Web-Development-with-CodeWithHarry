import { useState } from 'react'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
      </counterContext.Provider>
    </>
  )
}

export default App