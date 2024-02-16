import { useEffect } from "react";
import { fetchPodcastAlbum, fetchTrendingAlbum  } from "../redux/action"
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import AlbumPreview from "./AlbumPreview";

const MainScreen =  function () {
const dispatch = useDispatch();
const currentState = useSelector((state) => state);

    useEffect(() => {
        console.log(currentState)
        dispatch(fetchTrendingAlbum("queen"))
        dispatch(fetchPodcastAlbum("muschio"))
    }, []);

    useEffect(() => {
        console.log(currentState)
    }, [currentState]);

    return (
<>

<div className="d-flex flex-column">

<div className="d-flex pseudoNavbar"></div>
<p>TRENDING</p>
<p>PODCAST</p>
<p>MOODS AND GENRES</p>
<p>NEW RELEASES</p>
<p>DISCOVER</p>
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
</div>


</>

    )

}

export default MainScreen;