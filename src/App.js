import React from 'react'
import './App.css'
import { Creation, Hero, Interact } from './container'
import Footer from './container/footer/Footer'


const App = () => {
  return (
    <div className='app'>
      <Hero />
      <Interact />
      <Creation />
      <Footer />
  

    </div>
  )
}

export default App