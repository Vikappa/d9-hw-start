import { useEffect } from "react";
import { fetchPodcastAlbum, fetchTrendingAlbum  } from "../redux/action"
import { useDispatch } from "react-redux";
const MainScreen =  function () {
const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTrendingAlbum("queen"))
        dispatch(fetchPodcastAlbum("queen"))
    }, []);

    return (
        <div className="main-screen">

            <div className="main-screen-body">

            </div>
        </div>
    )

}

export default MainScreen;