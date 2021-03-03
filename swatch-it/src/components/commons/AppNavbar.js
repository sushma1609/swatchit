import React from 'react'
//import { Button } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
//import { FormControl } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'
//import { Form } from 'react-bootstrap'
//import { NavDropdown } from 'react-bootstrap'

const AppNavbar = () => {
    return(
        <div>
            <Navbar bg="primary" expand="lg" variant='dark'>
                <Navbar.Brand href="#home">SwatchIt</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
            </Navbar>
        </div>
    )
}


export default AppNavbar
