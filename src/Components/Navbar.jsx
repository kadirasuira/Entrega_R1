import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import CartWidget from './CartWidget';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 py-2 text-white">
      <Navbar.Brand href="#home" className="mr-auto">
        <Image src="https://lowefilms.netlify.app/assets/img/lowefilms1.png" alt="LoweFilms" fluid style={{ width: '55px' }} />
      </Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Products</Nav.Link>
        <Nav.Link href="#pricing">About Us</Nav.Link>
      </Nav>
      <CartWidget />
    </Navbar>
  );
};

export default MyNavbar;
