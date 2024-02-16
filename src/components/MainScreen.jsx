import { useEffect } from "react";
import { fetchPodcastAlbum, fetchTrendingAlbum  } from "../redux/action"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import AlbumPreview from "./AlbumPreview";
import Player from "./Player";

const MainScreen =  function () {
const dispatch = useDispatch();
const currentState = useSelector((state) => state);

    useEffect(() => {
        console.log(currentState)
        dispatch(fetchTrendingAlbum("queen"))
        dispatch(fetchPodcastAlbum("muschio"))
    }, []);

    useEffect(() => {
    }, [currentState]);

    return (
        <>
<div className="d-flex flex-column">


<div className="d-flex pseudoNavbar justify-content-evenly ">
<p className="titolipseudosidebar">TRENDING</p>
<p className="titolipseudosidebar">PODCAST</p>
<p className="titolipseudosidebar">MOODS AND GENRES</p>
<p className="titolipseudosidebar">NEW RELEASES</p>
<p className="titolipseudosidebar">DISCOVER</p>
</div>

<div className="vetrinaAlbum d-flex flex-row flex-wrap justify-content-evenly">
{
    currentState.trendingAlbum.lastSearch.map(
        (album, index) => {
            return (
                <AlbumPreview key={index} album={album} />
            )
        }
    )
}
<Player />
</div>


</div>
</>
    )

}

export default MainScreen;