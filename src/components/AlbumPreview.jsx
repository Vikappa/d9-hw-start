import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
function AlbumPreview (props) {

    const currentState = useSelector((state) => state);

    function estraiPercorsoDaUrl(url) {
        // Crea un oggetto URL dal parametro stringa fornito
        const urlAnalizzato = new URL(url);
      
        // Estrai il pathname dall'oggetto URL
        const pathname = urlAnalizzato.pathname;
      
        // Usa una espressione regolare per trovare il percorso desiderato
        // che inizia dopo il segmento 'album'
        const risultato = pathname.match(/\/album(\/\d+\/tracks)/);
      
        // Controlla se il risultato esiste e ritorna il gruppo corrispondente
        // Se non esiste, ritorna una stringa vuota o un messaggio di errore
        return risultato ? risultato[1] : 'Percorso non trovato';
      }
      
return (
    <Link to={estraiPercorsoDaUrl(props.album.album.tracklist)}>
    <div className="d-flex flex-column albumPreview">
<div>
<img src={props.album.album.cover} alt="cover"></img>
<p
onClick={()=>{
}}
>{props.album.album.title}</p>
</div>
    </div>
</Link>
)
}

export default AlbumPreview;