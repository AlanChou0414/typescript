import { useState, useRef } from 'react'
import './App.css'

import Table from './components/Table'

const App = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [inputValue, setInputValue] = useState<HTMLInputElement | {}>({})

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log(inputValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target?.id]: event.target?.value
    })
  }

  return (
    <div>
      {/* <form action="">
        <label htmlFor="email">信箱</label>
        <input type="email" id='email' ref={emailRef} onChange={handleInputChange} />
        <label htmlFor="password">密碼</label>
        <input type="password" id='password' ref={passwordRef} onChange={handleInputChange} />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form> */}
      <Table />
    </div>
  )
}

export default App