import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <Navbar className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Navbar.Brand href="#home">My Store</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        <CartWidget />
        </Navbar>
      </div>
      
    </div>
    
  );
};

export default NavBar;