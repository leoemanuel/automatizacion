import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function Pedidos() {

    return (

        <Container className='p-3'>
            <div className="card shadow lg">
                <div class="card-header text-center">
                    <h2> Busqueda de pedidos por usuario </h2>
                </div>
                <br></br>
                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Ingrese el usuario..." />
                    <Button variant="secondary">Buscar</Button>
                    <div className="vr" />
                    <Button variant="outline-danger">Cancelar</Button>
                </Stack>
                <br></br>
            </div>
        </Container>

    )
}

export default Pedidos;
