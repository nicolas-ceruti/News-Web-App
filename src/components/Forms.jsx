import React from 'react'


function Forms(props) {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <h2 className="text-center mb-4">{props.formtitle}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              autoComplete="current-password"
              required
            />
            <div id="passwordHelp" className="form-text">
              <a href="#" className="text-decoration-none">Forgot password?</a>
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center text-secondary">Not a member?{' '}
          <a href="#" className="fw-bold text-primary">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Forms
