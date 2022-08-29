import '../../App.css';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './NavMenu.css'



function NavMenu() {
    return (
        <Container className="p-4">
            <div className="card shadow lg">
                <Nav variant="pills" defaultActiveKey={1} className="flex-column navMenu text-center">
                    <Nav.Item>
                        <Nav.Link eventKey={1}>
                            <Link to='/'> Inicio</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={2}>
                            <Link to='/formulario'> Nuevo pedido </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={3}>
                            <Link to='/pedidos'> Verifica pedido</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={4}>
                            <Link to='/'> Modifica pedido</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Container>
    )
};

export default NavMenu;
