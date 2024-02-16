import { useEffect } from "react";

function AlbumPreview (props) {

    
useEffect(() => {  

}, []);

return (
    <>
<div style={{backgroundColor: "transparent", height: "18vh", width: "10vw"}}>
<img src={props.album.album.cover} alt="cover"></img>
</div>
<p>{props.album.album.title}</p>
    </>
)
}

export default AlbumPreview;