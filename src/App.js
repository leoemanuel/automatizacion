import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Inicio from './componentes/Inicio/inicio';
import Navbar from './componentes/Header/Navbar';
import NavMenu from './componentes/Navbar/NavMenu';
import Rutas from './componentes/Rutas/rutas'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <Row>
        <Col md={3}>
          <NavMenu />
        </Col>
        <Col md={8}>
          <Rutas>
            <Inicio />
          </Rutas>
        </Col>
      </Row>

    </div>

  );
}

export default App;
