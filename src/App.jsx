import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-black h-fit flex flex-col justify-between'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
