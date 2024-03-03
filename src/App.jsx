import React from 'react'
import Navbar from './components/Navbar'
import NewsItems from './components/NewsItems'
// import Forms from './components/Forms'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Forms from './components/Forms'
import google from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/google.png'
import facebook from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/facebook.png'
import Category from './components/Category'



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Category/>
   
    
    <Routes>
    <Route path="/sign-in" element={<Forms formtitle='Sign-In Using Your Account' button='Sign in' Password='Password' google={google}  facebook={facebook}/>}/>
    <Route path="/sign-up" element={<Forms formtitle='Create A New Account' button='Sign up' Password='Create Password' google={google}  facebook={facebook}/>} />
    <Route path="/" element={<NewsItems/>} />
    </Routes>

    
     </BrowserRouter> 
    
    </>
  )
}

export default App
