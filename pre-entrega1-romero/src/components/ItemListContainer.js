import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ItemListContainer(props) {
    return (
        <Container className="py-3">
            <h2>{props.greeting}</h2>
        </Container>
    );
}

export default ItemListContainer;
