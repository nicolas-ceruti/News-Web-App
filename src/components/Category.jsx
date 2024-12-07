import React from 'react';

function Category({ setCategory, isLoggedIn }) {
  // Shared button styles
  const buttonStyle = {
    borderRadius: '2rem',
    padding: '.5em 2em',
    textAlign: 'center',
    background: 'red',
    backgroundImage: 'linear-gradient(to left, white 50%, black 50%)',
    backgroundPosition: 'right',
    backgroundSize: '200%',
    transition: 'background-position 0.5s ease-out, color 0.5s ease',
  };

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
  };

  // Hover effect functions
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundPosition = 'left';
    e.currentTarget.style.color = 'white';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundPosition = 'right';
    e.currentTarget.style.color = 'black';
  };

  // List of categories
  const categories = ['general', 'health', 'business', 'entertainment', 'sports', 'technology', 'science'];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        position: 'fixed',
        top: '4rem',
        left: '0',
        width: '100%',
        zIndex: '1000',
        backgroundColor: '#F6F5FD',
      }}
      className="border p-2 rounded fixed-top"
    >
      {/* Render buttons dynamically for each category */}
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          style={buttonStyle}
          className={`btn btn-outline-dark ${isLoggedIn ? '' : 'disabled'} mt-1`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => handleCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Category;
