import * as React from "react";
import ImpossibledeFaireSortirLeTHISsetStateOutDeComposent from "./Car"

class TeleCommandCar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={() =>ImpossibledeFaireSortirLeTHISsetStateOutDeComposent({ vitesse: 2 })}>
                    Impossible Changer de vitesse de Car via TeleCommande
                  </button>  
    
            </div>

        );
    }
}

export default TeleCommandCar;