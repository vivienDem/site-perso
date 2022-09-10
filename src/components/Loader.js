import PropagateLoader from "react-spinners/PropagateLoader";
import React, { Component } from 'react';

const css = {
    margin: "0 auto",
    top: "50%",
    height: "50%"
}

class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <PropagateLoader color={this.props.color} cssOverride={css} />
            </div>
        );
    }
}

export default Loader;