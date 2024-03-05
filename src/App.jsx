import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsItems from './components/NewsItems'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Forms from './components/Forms'
import google from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/google.png'
import facebook from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/facebook.png'
import backgroundImage from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/beams-basic.png'
import SubscriptionForm from './components/SubscriptionForm'


function App() {
  const[category,setCategory]=useState("general")
  const[country,setCountry]=useState('in');
  return (
    <>
    <BrowserRouter>
    <div 
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    
     >


    <Navbar setCountry={setCountry}/>
    
   
    
    <Routes>
    <Route path="/sign-in" element={<Forms formtitle='Sign-In Using Your Account' button='Sign in' Password='Password' google={google}  facebook={facebook}/>}/>
    <Route path="/sign-up" element={<Forms formtitle='Create A New Account' button='Sign up' Password='Create Password' google={google}  facebook={facebook}/>} />
    <Route path="/" element={<NewsItems category={category} setCategory={setCategory} country={country} />} />
    <Route path='/subscribe' element={<SubscriptionForm/>}></Route>
    </Routes>
    </div>

    
     </BrowserRouter> 
    
    </>
  )
}

export default App
