import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { swipe } from '../redux/action'

function ContainerOutsideExample() {

const dispatch = useDispatch()
  const [lastSearch, setLastSearch] = useSelector(state => state.searchResults.lastSearch)

  const swipeSearchResult = () => {
dispatch(swipe()) 
   }


   return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            <p href="#">Home</p>
          </Link>
          <p 
            onClick={swipeSearchResult}
            className='navbar-brand'
            title="Pulisci i risultati della ricerca"
            style={{ cursor: 'pointer'}}
          >Swipe</p>
        </Container>
      </Navbar>
    </Container>
  )
   }  

export default ContainerOutsideExample;