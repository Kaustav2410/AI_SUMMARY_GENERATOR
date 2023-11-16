import { useState } from 'react'
import './App.css'
import Summary from './components/summary'
import About from './components/about'

function App() {
 

  return (
    <main>
       <div className='main'>
          <div className='gradient'/>
       </div>

       <div className='app'>
          <About />
          <Summary />
       </div>
    </main>
  )
}

export default App
