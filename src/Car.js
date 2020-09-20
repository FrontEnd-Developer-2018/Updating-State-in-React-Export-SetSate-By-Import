import * as React from "react";
import TeleCommandCar from "./TeleCommandCar";

export let FaireSortirLeTHISsetStateOutDeComposent = null;
class Car extends React.Component {
    constructor() {
        super();
        this.state = { vitesse: 10 };
        FaireSortirLeTHISsetStateOutDeComposent = this.setState
        //Obligatoire pour que ça fonctionne
        FaireSortirLeTHISsetStateOutDeComposent = FaireSortirLeTHISsetStateOutDeComposent.bind(this);
    }


    onChange = e => {
        this.setState({
            vitesse: this.state.vitesse * 2
        });
    };


    render() {
        return (
            <div>
                <button onClick={() => this.setState({ vitesse: this.state.vitesse + 10 })}>
                    Changer de vitesse
                  </button>

                <button onClick={() => FaireSortirLeTHISsetStateOutDeComposent({ vitesse: this.state.vitesse + 5 })}>
                    Changer de vitesse par FaireSortirLeTHISsetStateOutDeComposent
                  </button>
                <h2>Vitesse: {this.state.vitesse} Car!</h2>

                <TeleCommandCar onChange={this.onChange} />

            </div>

        );
    }
}

export default Car;