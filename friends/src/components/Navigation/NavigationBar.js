import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const NavigationBar = props => {

  console.log("nav props", props)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useEffect(() => {
   // if (localStorage.getItem('token')) {
   //   setIsLoggedIn(true);
    //}
  ///}, [isLoggedIn]);

  // Re-factor into action creator
  // Move state into redux!
  const logout = () => {
    localStorage.removeItem('token');
    return <Redirect to="/login" />;
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/friends">
          Friends List
        </NavbarBrand>

        <Nav className="ml-auto" navbar>
          {!props.loginIsLoading ? (
            <>
              <NavItem>
                <NavLink tag={Link} to="/addFriend">
                  Add Friend
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink  onClick={()=>logout()} to="/login">Logout</NavLink>
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
