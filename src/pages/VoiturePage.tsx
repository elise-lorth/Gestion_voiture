import * as MdIcons from "react-icons/md";
import React from "react";

{/*https://react-icons.github.io/react-icons/*/
}

function VoitureAffichage() {
    return <div className="margeGauche margeDroite">
        <h1>Gestion de la voiture</h1>
        <h2>Vitesse</h2>
        {/*Vitesse 0 : 0%, vitesse 1 : 27.5% etc jusqu'à 100%  MdArrowBack*/}
        <div className="ensembleBouton">
            <button className="smallButton" name="vitesse" value="0" id="0">0</button>
            <button className="smallButton" value="27.5" id="1">1</button>
            <button className="smallButton" value="40" id="2">2</button>
            <button className="smallButton" value="60" id="3">3</button>
            <button className="smallButton" value="80" id="4">4</button>
            <button className="smallButton" value="100" id="5">5</button>
        </div>
        <hr/>

        <h2>Direction</h2>
        <div className="ensemble-4-boutons-direction">
            <button className="bigButton" value="gauche"><MdIcons.MdArrowBack/></button>
            <div className="ensemble-2-boutons-direction">
                <button className="bigButton" value="haut"><MdIcons.MdArrowUpward/></button>
                <button className="bigButton" value="bas"><MdIcons.MdArrowDownward/></button>
            </div>
            <button className="bigButton" value="droite"><MdIcons.MdArrowForward/></button>
        </div>

        <hr/>

        <h2>Contrôle des 4 servomoteurs du bras</h2>
        <div className="ensemble-bras-moteur">
        <div>
            <h3 className="sansMarge">Orientation bras 1 </h3>
            <div className="ensembleBouton">
                {/*Mettre name partout pour les différencier ?*/}
                <button className="smallButton" name="vitesse" value="0" id="0">0</button>
                <button className="smallButton" value="27.5" id="1">1</button>
                <button className="smallButton" value="40" id="2">2</button>
                <button className="smallButton" value="60" id="3">3</button>
                <button className="smallButton" value="80" id="4">4</button>
                <button className="smallButton" value="100" id="5">5</button>
            </div>

            <h3 className="sansMarge">Orientation bras 2</h3>
            <div className="ensembleBouton">
                {/*Mettre name partout pour les différencier ?*/}
                <button className="smallButton" name="vitesse" value="0" id="0">0</button>
                <button className="smallButton" value="27.5" id="1">1</button>
                <button className="smallButton" value="40" id="2">2</button>
                <button className="smallButton" value="60" id="3">3</button>
                <button className="smallButton" value="80" id="4">4</button>
                <button className="smallButton" value="100" id="5">5</button>
            </div>

            <h3 className="sansMarge">Orientation bras 3</h3>
            <div className="ensembleBouton">
                {/*Mettre name partout pour les différencier ?*/}
                <button className="smallButton" name="vitesse" value="0" id="0">0</button>
                <button className="smallButton" value="27.5" id="1">1</button>
                <button className="smallButton" value="40" id="2">2</button>
                <button className="smallButton" value="60" id="3">3</button>
                <button className="smallButton" value="80" id="4">4</button>
                <button className="smallButton" value="100" id="5">5</button>
            </div>

            <h3 className="sansMarge">Orientation bras 4</h3>
            <div className="ensembleBouton">
                {/*Mettre name partout pour les différencier ?*/}
                <button className="smallButton" name="vitesse" value="0" id="0">0</button>
                <button className="smallButton" value="27.5" id="1">1</button>
                <button className="smallButton" value="40" id="2">2</button>
                <button className="smallButton" value="60" id="3">3</button>
                <button className="smallButton" value="80" id="4">4</button>
                <button className="smallButton" value="100" id="5">5</button>
            </div>

            <h3 className="sansMarge">Ouverture pince</h3>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
        <div><img src="Robot-schema.svg" height="380" alt="Nice green circle3"/></div></div>
        <hr/>
        <h2>Contrôle des leds </h2>
        <div className="ensembleLed">
            <h3 className="sansMarge">Led gauche : </h3>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <br/>
            <h3 className="margeGauche sansMarge"> Led droite :</h3>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
        <form method="post" action="/voiture">
            <h3 className="sansMarge">Durée de clignotement en secondes : </h3>
            <input type="number" name="duree" min="1" max="15"/>
            <input className="smallButton" type="submit" value="Send"/>
        </form>
        <hr/>

        <h2>Rénitialiser la position du bras et mettre le véhicule à l'arrêt</h2>
        <button className="bigButton" value="renitialiser">Rénitialiser</button>
    </div>
}

export default VoitureAffichage;