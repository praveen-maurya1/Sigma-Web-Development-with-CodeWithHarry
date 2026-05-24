import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({ email: "", name: "" })

  const handleClick = () => {
    alert("Hey I am clicked");
  }
  const handelMouseOver = () => {
    alert("Hey I am a mouse over");
  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
    console.log(form)
  }

  return (
    <>
      <div className='btn'>
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handelMouseOver}>
        I am red div
      </div>
      <input type="text" name="email" value={FormData.email} onChange={handleChange} />
      <input type="text" name="phone" value={FormData.phone} onChange={handleChange} />
    </>
  )
}

export default App
