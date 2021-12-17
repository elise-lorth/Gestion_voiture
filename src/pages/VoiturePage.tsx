import * as MdIcons from "react-icons/md";
import React from "react";
import NumericInput from "react-numeric-input";
{/*https://react-icons.github.io/react-icons/*/}

function VoitureAffichage(this: any) {

    function move(speed: number, time: number, e: any) {
        e.preventDefault();
        console.log(speed);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "move " + speed + " " + time  + " forward"})
        };
        fetch("/api", requestOptions);
    }

    function turnRight(e: any) {
        e.preventDefault();
        console.log("renitialiser");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "turn right"})
        };
        fetch("/api", requestOptions);
    }

    function turnLeft(e: any) {
        e.preventDefault();
        console.log("renitialiser");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "turn left"})
        };
        fetch("/api", requestOptions);
    }

    function forward(e: any) {
        e.preventDefault();
        console.log("renitialiser");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "move " + 35 + " " + 1 + " forward"})
        };
        fetch("/api", requestOptions);
    }

    function backward(e: any) {
        e.preventDefault();
        console.log("renitialiser");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "move " + 35 + " " + 1 + " backward"})
        };
        fetch("/api", requestOptions);
    }

    function reinitialise(e: any) {
        e.preventDefault();
        console.log("renitialiser");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "reinit ."})
        };
        fetch("/api", requestOptions);
    }

    const pince = () => {
        console.log(handleChangePince());
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "pince " + handleChangePince()})
        };
        fetch("/api", requestOptions);
    }
    const lightDroite = () => {
        handleChangeDroite()
        console.log("light " + checkedGauche + " " + !checkedDroite + " 0");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "light " + checkedGauche + " " + !checkedDroite + " 0"})
        };
        fetch("/api", requestOptions);
    }
    const lightGauche = () => {
        handleChangeGauche()
        console.log("light " + !checkedGauche + " " + checkedDroite + " 0");
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "light " + !checkedGauche + " " + checkedDroite + " 0"})
        };
        fetch("/api", requestOptions);
    }
    function lightDuree(e: any) {
        e.preventDefault();
        // handleInput(e);
        console.log(duree);
        console.log("light " + checkedGauche + " " + checkedDroite + " " + duree);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "light " + !checkedGauche + " " + checkedDroite + " " + duree})
        };
        fetch("/api", requestOptions);
    }

    const [duree, setDuree] = React.useState( 0);
    const [checkedPince, setCheckedPince] = React.useState(false);
    const [checkedGauche, setCheckedGauche] = React.useState(false);
    const [checkedDroite, setCheckedDroite] = React.useState(false);

    const handleInput = (e: any) => {
        setDuree(e);
        // console.log(duree);
    };
    const handleChangePince = () => {
        setCheckedPince(!checkedPince);
        return !checkedPince;
    };
    const handleChangeDroite = () => {
        setCheckedDroite(!checkedDroite);
    };
    const handleChangeGauche = () => {
        setCheckedGauche(!checkedGauche);
    };

    function moveServo(numberServo: number, positionServo: number, e: any) {
        e.preventDefault();
        console.log("servo " + numberServo + " " + positionServo);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data_: "servo " + numberServo + " " + positionServo})
        };
        fetch("/api", requestOptions);
    }

    return <div className="margeGauche margeDroite">
        <h1>Gestion de la voiture</h1>
        <h2>Vitesse</h2>
        {/*Vitesse 0 : 0%, vitesse 1 : 27.5% etc jusqu'à 100%  MdArrowBack*/}
        <div className="ensembleBouton">
            <button className="smallButton" name="vitesse" id="0" onClick={(e) => move(0, 4, e)}>0</button>
            <button className="smallButton" id="1" onClick={(e) => move(27.5, 4, e)}>1</button>
            <button className="smallButton" id="2" onClick={(e) => move(40, 4, e)}>2</button>
            <button className="smallButton" id="3" onClick={(e) => move(60, 4, e)}>3</button>
            <button className="smallButton" id="4" onClick={(e) => move(80, 4, e)}>4</button>
            <button className="smallButton" id="5" onClick={(e) => move(100, 4, e)}>5</button>
        </div>
        <hr/>

        <h2>Direction</h2>
        <div className="ensemble-4-boutons-direction">
            <button className="bigButton" value="gauche" onClick={(e) => turnLeft(e)}><MdIcons.MdArrowBack/></button>
            <div className="ensemble-2-boutons-direction">
                <button className="bigButton" value="haut" onClick={(e) => forward(e)}><MdIcons.MdArrowUpward/></button>
                <button className="bigButton" value="bas" onClick={(e) => backward(e)}><MdIcons.MdArrowDownward/>
                </button>
            </div>
            <button className="bigButton" value="droite" onClick={(e) => turnRight(e)}><MdIcons.MdArrowForward/>
            </button>
        </div>

        <hr/>

        <h2>Contrôle des 4 servomoteurs du bras</h2>
        <div className="ensemble-bras-moteur">
            <div>
                <h3 className="sansMarge">Orientation bras 1 </h3>
                <div className="ensembleBouton">
                    <button className="smallButton" name="servo1" id="0" onClick={(e) => moveServo(1, 0, e)}>0</button>
                    <button className="smallButton" id="1" onClick={(e) => moveServo(1, 1, e)}>1</button>
                    <button className="smallButton" id="2" onClick={(e) => moveServo(1, 2, e)}>2</button>
                    <button className="smallButton" id="3" onClick={(e) => moveServo(1, 3, e)}>3</button>
                    <button className="smallButton" id="4" onClick={(e) => moveServo(1, 4, e)}>4</button>
                    <button className="smallButton" id="5" onClick={(e) => moveServo(1, 5, e)}>5</button>
                    <button className="smallButton" id="6" onClick={(e) => moveServo(1, 6, e)}>6</button>
                </div>

                <h3 className="sansMarge">Orientation bras 2</h3>
                <div className="ensembleBouton">
                    <button className="smallButton" name="servo2" id="0" onClick={(e) => moveServo(2, 0, e)}>0</button>
                    <button className="smallButton" id="1" onClick={(e) => moveServo(2, 1, e)}>1</button>
                    <button className="smallButton" id="3" onClick={(e) => moveServo(2, 3, e)}>3</button>
                    <button className="smallButton" id="4" onClick={(e) => moveServo(2, 4, e)}>4</button>
                    <button className="smallButton" id="2" onClick={(e) => moveServo(2, 2, e)}>2</button>
                    <button className="smallButton" id="5" onClick={(e) => moveServo(2, 5, e)}>5</button>
                    <button className="smallButton" id="6" onClick={(e) => moveServo(2, 6, e)}>6</button>
                </div>

                <h3 className="sansMarge">Orientation bras 3</h3>
                <div className="ensembleBouton">
                    <button className="smallButton" name="servo3" id="0" onClick={(e) => moveServo(3, 0, e)}>0</button>
                    <button className="smallButton" id="1" onClick={(e) => moveServo(3, 1, e)}>1</button>
                    <button className="smallButton" id="2" onClick={(e) => moveServo(3, 2, e)}>2</button>
                    <button className="smallButton" id="3" onClick={(e) => moveServo(3, 3, e)}>3</button>
                    <button className="smallButton" id="4" onClick={(e) => moveServo(3, 4, e)}>4</button>
                    <button className="smallButton" id="5" onClick={(e) => moveServo(3, 5, e)}>5</button>
                    <button className="smallButton" id="6" onClick={(e) => moveServo(3, 6, e)}>6</button>
                </div>

                <h3 className="sansMarge">Orientation bras 4</h3>
                <div className="ensembleBouton">
                    <button className="smallButton" name="servo4" id="0" onClick={(e) => moveServo(4, 0, e)}>0</button>
                    <button className="smallButton" id="1" onClick={(e) => moveServo(4, 1, e)}>1</button>
                    <button className="smallButton" id="2" onClick={(e) => moveServo(4, 2, e)}>2</button>
                    <button className="smallButton" id="3" onClick={(e) => moveServo(4, 3, e)}>3</button>
                    <button className="smallButton" id="4" onClick={(e) => moveServo(4, 4, e)}>4</button>
                    <button className="smallButton" id="5" onClick={(e) => moveServo(4, 5, e)}>5</button>
                    <button className="smallButton" id="6" onClick={(e) => moveServo(4, 6, e)}>6</button>
                </div>

                <h3 className="sansMarge">Ouverture pince</h3>
                <label className="switch">
                    <input type="checkbox" checked={checkedPince} onChange={pince}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div><img src="Robot-schema.svg" height="380" alt="Nice green circle3"/></div>
        </div>
        <hr/>
        <h2>Contrôle des leds </h2>
        <div className="ensembleLed">
            <h3 className="sansMarge">Led gauche : </h3>
            <label className="switch">
                <input type="checkbox" checked={checkedGauche} onChange={lightGauche}/>
                <span className="slider round"></span>
            </label>
            <br/>
            <h3 className="margeGauche sansMarge"> Led droite :</h3>
            <label className="switch">
                <input type="checkbox" checked={checkedDroite} onChange={lightDroite}/>
                <span className="slider round"></span>
            </label>
        </div>
        <div>
            <h3 className="sansMarge">Durée de clignotement en secondes : </h3>
            <NumericInput name="duree" value={duree}  min={ 0.5 }  max={ 15 } size={ 2 } mobile onChange={(e)=> handleInput(e)} />
            <button className="smallButton" onClick={(e) => lightDuree(e)}>Envoyer</button>
        </div>
        <hr/>

        <h2>Rénitialiser la position du bras et mettre le véhicule à l'arrêt</h2>
        <button className="bigButton" value="renitialiser" onClick={(e) => reinitialise(e)}>Rénitialiser</button>
    </div>
}

export default VoitureAffichage;