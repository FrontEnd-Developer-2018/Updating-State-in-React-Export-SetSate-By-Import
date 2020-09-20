import * as React from "react";
import FaireSortirLeTHISsetStateOutDeComposent from "./Car"

class TeleCommandCar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={() =>FaireSortirLeTHISsetStateOutDeComposent({ vitesse: 2 })}>
                    Changer de vitesse de Car via TeleCommande
                  </button>  
    
            </div>

        );
    }
}

export default TeleCommandCar;