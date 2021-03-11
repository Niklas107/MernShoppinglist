import React, { Component, Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  NavItem,

} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import Logout from './auth/Logout';
import LoginModal from './auth/LoginModal';
import UserProfile from './UserProfile';
// import AltLoginModal from './auth/AltLoginModal'

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // const[dropdownOpen, setDropdownOpen] = useState(false);
  // dropdownToggle = () => setDropdownOpen(prevState => !prevState);

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <UserProfile />
        </NavItem>&nbsp;
        <NavItem>
          <Link
            to="/shopping" className="btn btn-secondary" >Shopping</Link>&nbsp;
        </NavItem>
        <NavItem>
          <Link to="/about" className="btn btn-secondary">About</Link>&nbsp;
        </NavItem>

        {/* <NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
            <DropdownToggle caret>
              Other pages
            </DropdownToggle>
          <DropdownMenu>
              <DropdownItem><NavLink to="/">Home</NavLink><DropdownItem />
              <DropdownItem><NavLink to="/about">About</NavLink></DropdownItem>
              <DropdownItem><NavLink to="/shopping">Shopping</NavLink></DropdownItem>
          </DropdownMenu>
            </Dropdown>
        </NavItem> */}
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem >
          <LoginModal />
        </NavItem>
        {/* <NavItem>
          <AltLoginModal />
        </NavItem> */}
        <NavItem>
          <Link to="/about" className="btn btn-secondary">About</Link>&nbsp;
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">MERN APP</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
