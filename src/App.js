import React from "react";
import "./style.css";
import Car from "./Car"
import Foobar from "./Foobar"

import TeleCommandCar from "./TeleCommandCar"


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }


    render() {
        return (
            <div>
                <div>
                    <Car />
                    <TeleCommandCar />
                </div>

                <div style={{ marginTop: "10px", border: "1px solid" }}>
                    <Foobar ref={this.myRef} />
                    <button onClick={() => this.myRef.setState({ updateMe: "Fixed" })}>
                        Now I Change Foobar outside component
                  </button>
                </div>
            </div>
        );
    }
}