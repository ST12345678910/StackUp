import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <header className="text-dark mb-4 py-3 display-flex align-center">
      
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        
        <div>
          {Auth.loggedIn() ? (
            <><Link className="btn" to="/aboutus">
              About
            </Link>
              <Link className="btn" to="/">
                Projects
              </Link>
              <Link className="btn" to={`/profiles/${Auth.getProfile().data._id}`}>
                {Auth.getProfile().data.name}'s Project
              </Link>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn" to="/aboutus">
                About
              </Link>
              <Link className="btn" to="/">
                Projects
              </Link>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>

        <div class="font-Titillium Web text-center justify-content-center">
          <h1 id="mainheader" class="text-center m-10">Stack Up</h1>
          <h3 id="mantra" class="text-center">See how your projects and ideas Stack Up against the rest!</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
