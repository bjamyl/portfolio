import React from 'react'
import './App.scss'

import {Navbar, Floatbar, Shadow} from './components'
import {Header, About, Works, Contact, Footer} from './containers'

const App = () => {
  return (
    <div className='app'>
      <Shadow />
      <Floatbar />
      <Navbar />
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App