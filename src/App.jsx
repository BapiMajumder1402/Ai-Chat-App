import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Body from './Components/Body/Body'
import History from './Components/History/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Body/>
      <History/>

    </div>
  )
}

export default App
