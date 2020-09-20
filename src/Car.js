import * as React from "react";

export let FaireSortirLeTHISsetStateOutDeComposent =null;
class Car extends React.Component {
    constructor() {
        super();
        this.state = { vitesse: 10 };
        FaireSortirLeTHISsetStateOutDeComposent=this.setState
        FaireSortirLeTHISsetStateOutDeComposent = FaireSortirLeTHISsetStateOutDeComposent.bind(this);
    }
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

            </div>

        );
    }
}

export default Car;