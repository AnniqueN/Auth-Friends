import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

const NavigationBar = props => {
  
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem('token') ) {
      setIsLoggedIn(true);
      console.log("useEffect", isLoggedIn)
    }
  }, [localStorage.getItem('token')]);


  // Re-factor into action creator
  // Move state into redux!
  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
   return ""
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/friends">
          Friends List
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {isLoggedIn ? (
            <>
              {console.log(isLoggedIn, "after")}
              <NavItem>
                <NavLink tag={Link} to="/addFriend">
                  Add Friend
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink onClick={() => logout()} to="/login">
                  Logout
                </NavLink>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loginIsLoading: state.loginIsLoading,
  };
};

export default connect(
  mapStateToProps,
  {},
)(NavigationBar);
