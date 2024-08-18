import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Body2 from './components/Body2'
import BoxContainer from './components/BoxContainer'
import CardContainer from './components/CardContainer'
import FAQ from './components/FAQContainer'
import "./App.css"

function App() {
  return (
    <>
      <div className='app'>
      <Navbar/>
      <Body/>
      <Body2/>
      <BoxContainer/>
      <CardContainer/>
      <FAQ/>
      <Footer/>
      </div>
    </>
  )
}

export default App
