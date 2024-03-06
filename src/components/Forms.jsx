import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios for making HTTP requests
import backgroundImage from '/Users/mangeshyadav/Desktop/React/new-app/src/assets/beams-basic.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Forms(props) {
  const [showPassword, setShowPassword] = useState(false);
  const showForgotPassword = props.button === 'Sign in';
  const navigate = useNavigate(); // Initialize useNavigate

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      // Send form data to backend server
      const response = await axios.post('http://localhost:3003/api/register', formData); // Assuming your backend server is running on localhost:3003
      console.log(response.data); // Log response from backend
      // alert('Registration successful!');
      // Redirect to the success page after successful registration
      navigate('/registration-success');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <div className="border" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the div covers the entire viewport height
    }}>
      <div className="row justify-content-center ">
        <div className="col-md-6 mt-5 border rounded p-5">
          <h2 className="text-center mb-4">{props.formtitle}</h2>
          <form className={props.button} onSubmit={handleSubmit}> {/* Call handleSubmit on form submission */}
            {!showForgotPassword && (<div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                autoComplete="name"
                required
                placeholder='your name'
              />
            </div>)}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoComplete="email"
                required
                placeholder='your email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">{props.Password}</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  autoComplete="current-password"
                  required
                  placeholder='password'
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </button>
              </div>
              {showForgotPassword && (
                <div id="passwordHelp" className="form-text">
                  <a href="#" className="text-decoration-none">Forgot password?</a>
                </div>
              )}
            </div>
            <div className="mb-3">
              <button style={{height:'3rem'}}
                type="submit"
                className="btn btn-outline-dark w-100  mx-auto d-block"
              >
                {props.formtitle}
              </button>
            </div>
          </form>
          {props.formtitle === "Sign in" && (
            <p className="text-center text-secondary">Not a member?{' '}
              <a href="#" className="fw-bold text-dark">Start a 14 day free trial</a>
            </p>
          )}

          {/* Sign up/Sign in with Google and Facebook */}
          <div className="mt-3 " style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
            <button className="btn btn-outline-dark w-50 mx-4 ">
              {props.button} With&nbsp; <img style={{height:'2rem',marginBottom:'.2rem'}} src={props.google}/>
            </button>

            <button className="btn btn-outline-dark w-50 mx-4">
              {props.button} With &nbsp;<img style={{height:'2rem',marginBottom:'.2rem'}} src={props.facebook}/>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
