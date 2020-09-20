import * as React from "react";


class Foobar extends React.Component {
    constructor() {
        super();
        this.state = {
            updateMe: "Initial value"
        }
    }
    render() {
        return (
            <div>
                <h2>Foobar-value=> {this.state.updateMe}</h2>
            </div>

        );
    }
}

export default Foobar;