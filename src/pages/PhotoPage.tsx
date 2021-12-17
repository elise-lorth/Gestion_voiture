import React from "react";

function PhotoAffichage() {
    function prendrePhoto(e: any) {
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
            <h2>Appuyez pour prendre une photo</h2>
            <p style={{color:'white'}}>......... </p>
            <button className="bigButton" value="photo" onClick={(e) => prendrePhoto(e)}>Prendre une photo
            </button>
        </div>
        <div className="image-au-centre">

        <img src="attente.png" height="475" alt="Logo"
             style={{border: '5px solid #2C4D46', padding: '5px', margin: '5px'}}/>
    </div>
    </div>
}

export default PhotoAffichage;