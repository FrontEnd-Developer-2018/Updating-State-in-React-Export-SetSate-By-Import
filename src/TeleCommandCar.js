import * as React from "react";
import FaireSortirLeTHISsetStateOutDeComposent from "./Car"


class TeleCommandCar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                {this.props.onChange &&
                    <div>
                        < button onClick={() => FaireSortirLeTHISsetStateOutDeComposent({ vitesse: 2 })}>
                            Impossible de Changer de vitesse de Car via TeleCommande
                  </button>
                        <button onClick={this.props.onChange}>
                            Chnger Le vitesse -Classic way
                  </button>
                    </div>

                }

            </div>




        );
    }
}

export default TeleCommandCar;