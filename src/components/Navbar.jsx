import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NewziFy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <ul className="navbar-nav " style={{display:'flex',justifyContent:'space-around'}}>
            <li className="nav-item">
                <h5>

              <a className="nav-link active mx-3" aria-current="page" href="#">About</a>
                </h5>
            </li>
            <li className="nav-item">
                <h5>

              <a className="nav-link" href="#">Subscribe</a>
                </h5>
            </li>
          </ul>
        </div>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success m-1" type="submit">Sign In</button>
            <button className="btn btn-outline-success m-1" type="submit">Sign Up</button>
          </form>
      </div>
    </nav>
  );
}

export default Navbar;
