import React, { Component } from 'react';
import { Link } from "react-router-dom";

class GitHubButton extends Component {
    open() {
        window.open('https://github.com/vivienDem', '_blank');
    }

    render() {
        return (
            <div className='gitHubButton' onClick={this.open}>

                <div className="content">
                    <h4>Github <i className='fab fa-github' /> </h4>
                </div>


            </div>
        );
    }
}

export default GitHubButton;