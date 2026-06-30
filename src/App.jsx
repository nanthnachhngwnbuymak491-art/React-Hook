import React from 'react'
import Counter from './components/Counter'
import NameInput from './components/NameInput'
import Clock from './components/Clock'

const App = () => {
  return (
    <div>
        <Counter />
        <NameInput />
        <Clock />
    </div>
  )
}

export default App