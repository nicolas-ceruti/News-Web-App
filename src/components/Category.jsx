import React from 'react'

function Category({setCategory}) {
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',margin:'1rem auto'}} className='border p-2 m-0'>
      <button type="button" style={{
        
        
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease'      }}
      className="btn btn-outline-dark btn-sm"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} >General</button>
       <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 1em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>setCategory("health")}>Health</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }}onClick={()=>setCategory("business")}>Business</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>setCategory("entertainment")}>Entertainment</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>setCategory("sports")}>Sports</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>setCategory("technology")}>Technology</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>setCategory("science")}>Science</button> 

    </div>
  )
}

export default Category

{/* <button
      type="button"
      style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className="btn btn-outline-dark"
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }}
    >
      General
    </button> */}