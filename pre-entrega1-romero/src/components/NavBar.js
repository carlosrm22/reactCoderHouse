import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Mi tienda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Categoría 1</Nav.Link>
                    <Nav.Link href="#">Categoría 2</Nav.Link>
                    <Nav.Link href="#">Categoría 3</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    );
}

function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '20px' }} />
            <span style={{ backgroundColor: 'red', borderRadius: '50%', padding: '2px 5px', color: 'white' }}>2</span>
        </div>
    );
}

export default NavBar;