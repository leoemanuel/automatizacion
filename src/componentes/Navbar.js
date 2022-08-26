
import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function NavbarMenu() {
    return (
         <Navbar bg="dark" variant="dark" className="flex-column">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="logo_claro-2.png"
              width="80"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
       </Navbar>    

    )};

export default NavbarMenu;

