import * as React from "react";

export let ImpossibledeFaireSortirLeTHISsetStateOutDeComposent =null;
class Car extends React.Component {
    constructor() {
        super();
        this.state = { vitesse: 10 };
        ImpossibledeFaireSortirLeTHISsetStateOutDeComposent=this.setState
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ vitesse: this.state.vitesse + 10 })}>
                    Changer de vitesse 
                  </button>  

                   <button onClick={() => ImpossibledeFaireSortirLeTHISsetStateOutDeComposent({ vitesse: this.state.vitesse + 5 })}>
                    Changer de vitesse par ImpossibledeFaireSortirLeTHISsetStateOutDeComposent
                  </button>  
                <h2>Vitesse: {this.state.vitesse} Car!</h2>

            </div>

        );
    }
}

export default Car;