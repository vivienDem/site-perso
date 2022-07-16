import React, { Component } from 'react';

class GitHubButton extends Component {
    render() {
        return (
            <div className='gitHubButton'>
                <a
                    href="/todo"
                    rel="noopener noreferrer"
                    className="sourceButton"
                    target="blank"
                >
                    <div className="content">
                        <h4>Github</h4>
                    </div>
                    <div className="logo">
                        <i className='fab fa-github' />
                    </div>

                </a>
            </div>
        );
    }
}

export default GitHubButton;