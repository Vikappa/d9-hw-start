import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
          <p href="#">Home</p>
          </Link>
          <p
          style={{ cursor: 'pointer'}}
          className='me-auto navbar-brand'
          onClick={(e) => {
            e.preventDefault()
            console.log("click")

          }}
          >Wipe</p>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;