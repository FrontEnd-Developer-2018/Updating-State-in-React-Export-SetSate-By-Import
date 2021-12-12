import * as React from 'react';
import FaireSortirLeTHISsetStateOutDeComposent from './Car';

// Ici j'importe le this.state ,hhhh, zwina hadi
// But I don't have acces to all this
//Par exemple pour acceder à state ,je doit le passer en props
// ça devient anti-encapsulation
import { FaireSortirLeTHISsetStateOutDeComposent as possiblYehYeh } from './Car';

class TeleCommandCar extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(FaireSortirLeTHISsetStateOutDeComposent);
    console.log(possiblYehYeh);
    return (
      <div>
        {this.props.onChange && (
          <div>
            <button
              onClick={() =>
                FaireSortirLeTHISsetStateOutDeComposent({ vitesse: 2 })
              }
            >
              Impossible de Changer de vitesse de Car via TeleCommande
            </button>

            <button
              onClick={() => possiblYehYeh({ vitesse: 2 * this.props.vitesse })}
            >
              possiblYehYeh possiblYehYeh de Changer de vitesse de Car via
              TeleCommande
            </button>

            <button onClick={this.props.onChange}>
              Chnger Le vitesse -Classic way
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TeleCommandCar;
