import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../pages/Profile';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            This is a title
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          title text blah blah
        </p>
        <div>
          {Auth.loggedIn() ? (
            <><Link className="btn btn-lg btn-light m-2" to="/">
              About Us
            </Link>
              <Link className="btn btn-lg btn-light m-2" to="/">
                Projects
              </Link>
              <Link className="btn btn-lg btn-light m-2" to={`/profiles/${Auth.getProfile().data._id}`}>
                {Auth.getProfile().data.name}'s Project
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button> 
            </>
          ) : (
            <>
                <Link className="btn btn-lg btn-light m-2" to="/about">
                  About Us
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/">
                  Projects
                </Link>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
