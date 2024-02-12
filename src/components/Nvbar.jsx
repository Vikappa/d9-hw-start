import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Nvbar() {
  return (
    <Container className=''>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className="navbar-brand">
          <p>Home</p>
          </Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Nvbar;