import React from 'react'
import Navbar from './components/Navbar'
import NewsItems from './components/NewsItems'
import Category from './components/Category'
import Form from './components/Form'



function App() {
  return (
    <>
    <Navbar/>
    <Form/>
    <Category/>
    <h3 className='text-center mt-3' style={{ wordSpacing: '.5rem' }}>NewziFy - Top HeadLines Of The Day</h3>

    <NewsItems/>
    </>
  )
}

export default App
