import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Formulario() {
    return (
        <Container className='p-4'>
            <div className="card shadow lg">
                <div class="card-header text-center">
                    <h2 class="text-dark">Creación de un nuevo pedido</h2>
                 </div>
                <div class="card-body">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ingrese mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Fecha de Impacto del pedido</Form.Label>
                            <Form.Control type="text" placeholder="fecha de impacto" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cantidad de Líneas</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>País</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="AR">Argentina</option>
                                <option value="PY">Paraguay</option>
                                <option value="UY">Uruguay</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Número de SD</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Archivo template</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="danger" type="submit">
                                Confirmar
                            </Button>{' '}{' '}
                            <Button variant="danger" type="submit">
                                Cancelar
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default Formulario;