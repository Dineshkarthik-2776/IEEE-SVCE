import { useState } from 'react'

import Home from './components/Home'
import Events from './components/Events'
import About from './components/About'
import Contact from'./components/Contact'
import Join from './components/Join'
import Crew from './components/Crew'
import Head from './components/Header'

function App() {
  return (
    <>
      <Head/>
      <div id='home'><Home/></div>
      <div id='about'><About/></div>
      <div id='events'><Events/></div>
      <div id='join'><Join/></div>
      <div id='crew'><Crew/></div>
      <div id='contact'><Contact/></div>
    </>
  )
}

export default App
