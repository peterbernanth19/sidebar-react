import logo from './logo.svg';
import './App.css';
import OffCanvas from './components/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Toggle below for <code>Sidebar</code>.
        </p>
        <Container fluid='md'>
          <Row>
            <Col>
              <OffCanvas placement={'start'} variant={'primary'} />
            </Col>
            <Col>
              <OffCanvas placement={'end'} variant={'warning'} />
            </Col>
            <Col>
              <OffCanvas placement={'top'} variant={'success'} />
            </Col>
            <Col>
              <OffCanvas placement={'bottom'} variant={'secondary'} />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
