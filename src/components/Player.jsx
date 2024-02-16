import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import playIcon from '../assets/playerbuttons/play.png';
import prevIcon from '../assets/playerbuttons/prev.png';
import nextIcon from '../assets/playerbuttons/next.png';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchTracklist } from '../redux/action';
import { useDispatch } from 'react-redux';

function Player() {
  let  albumId  = useParams(); // Assumendo che il parametro si chiami 'albumId' nella tua route
  const dispatch = useDispatch();

  useEffect(() => {
    if (albumId) {
      const tracklistUrl = `https://api.deezer.com/album/${albumId}/tracks`; 
      console.log(tracklistUrl);
      dispatch(fetchTracklist(tracklistUrl));
    }
  }, [albumId]);

  return (
    <Navbar sticky="bottom" id="player">
      <Container className='d-flex justify-content-center'>
        <img className='playerIconPng' src={prevIcon} alt="prev Icon" />
        <img className='playerIconPng' src={playIcon} alt="play Icon" />
        <img className='playerIconPng' src={nextIcon} alt="next Icon" />
      </Container>
    </Navbar>
  );
}

export default Player;
