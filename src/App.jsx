import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div
      className='container'
    >
      <a
        id='PortfolioBtn'
        href='https://rahulportfolio-e59ed.web.app/'
        target='_blank'
      >
        <button className='btn'>Portfolio</button>
      </a>
      <a
        href='https://github.com/Rahul-7416'
        target='_blank'
      >
        <button className='btn'>GitHub</button>
      </a>
      <a
        href='https://www.linkedin.com/in/rahul7416/'
        target='_blank'
      >
        <button className='btn'>LinkedIn</button>
      </a>
    </div>
  )
}

export default App
