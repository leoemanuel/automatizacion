import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Inicio from './componentes/inicio';
import Navbar from './componentes/Navbar';
import NavMenu from './componentes/NavMenu';
import Rutas from './componentes/rutas'
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
