import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Students from './components/Students'
import Resources from './components/Resources'
import Community from './components/Community'
import Learn from './components/Learn'
import Instructor from './components/Instructor'
import Faq from './components/Faq'
import Footer from './components/Footer'
import JoinUs from './components/JoinUs.JSX'
import Copyright from './components/Copyright'

const App = () => {
  return (
    <div className='w-screen overflow-x-hidden min-h-screen relative'>
      <Navbar/>
      <Hero/>
      <Students/>
      <Resources/>
      <Community/>
      <Learn/>
      <Instructor/>
      <Faq/>
      <JoinUs/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App