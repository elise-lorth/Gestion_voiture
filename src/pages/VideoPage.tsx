import React from "react";

function VideoAffichage() {
    function prendreVideo(e: any) {
        e.preventDefault();
        console.log("photo");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "paparazzi ."})
        };
        fetch("/api", requestOptions);
    }

    return <div className="margeGauche margeDroite">
        <div className="ensembleBoutonPhoto">
            <h2>Appuyez pour prendre une vidéo</h2>
            <p style={{color:'white'}}>......... </p>
            <button className="bigButton" value="photo" onClick={(e) => prendreVideo(e)}>Prendre une vidéo
            </button>
        </div>
        <div className="image-au-centre">

            <img src="attente-video.png" height="475" alt="Logo"
                 style={{border: '5px solid #2C4D46', padding: '5px', margin: '5px'}}/>
        </div>
    </div>
}

export default VideoAffichage;