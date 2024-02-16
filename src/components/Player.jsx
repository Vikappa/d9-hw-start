import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import playIcon from '../assets/playerbuttons/play.png'
import prevIcon from '../assets/playerbuttons/prev.png'
import nextIcon from '../assets/playerbuttons/next.png'

function Player() {
  return (
    <Navbar
    sticky="bottom"
    id="player">
      <Container className='d-flex justify-content-center'>
      <img className='playerIconPng' src={prevIcon} alt="prev Icon" />
      <img className='playerIconPng' src={playIcon} alt="play Icon" />
      <img className='playerIconPng' src={nextIcon} alt="next Icon" />
      </Container>
    </Navbar>
  );
}

export default Player;