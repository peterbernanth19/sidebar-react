import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Alert from 'react-bootstrap/Alert';

function OffCanvas({ placement, variant }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ width: '100%'}}>
        Launch me from {placement.toUpperCase()}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><code>Menu</code></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Alert key={variant} variant={variant}>
            Hello I am from {placement}!
          </Alert>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;