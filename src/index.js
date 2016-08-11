import React from 'react';
import ReactDOM from 'react-dom';

import ShInputSelectExamples from './sh-input-select';
import ShInputTextExamples from './sh-input-text';

require('./main.scss');

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                {name: 'ShInputSelect', code: <ShInputSelectExamples />, github: 'https://github.com/SuperheroUI/shInputSelect'},
                {name: 'ShInputText', code: <ShInputTextExamples />}
            ]
        }
    }

    render() {
        let examples = this.state.examples.map((example, index) => {
            let githubLink = null;
            if (example.github) {
                githubLink = <a href={example.github} target="_blank"><img src="../images/github.svg" /></a>;
            }

            return (
                <div key={index} className="example">
                    <div className="title">{example.name}{githubLink}</div>
                    <div className="code">{example.code}</div>
                </div>
            )
        });

        return (
            <div className="pageWrapper">
                <div className="nav">
                    <div className="navItem"><a>Docs</a></div>
                    <div className="navItem"><a>Components</a></div>
                    <div className="navItem"><a>Github</a></div>
                </div>
                <div className="header">
                    <div className="subHeader">
                        <img className="logo" src="../images/logo.svg" />
                        <div className="name">Superhero<span className="sub">UI</span></div>
                        <div className="subText">React components that are really super awesome</div>
                    </div>
                </div>
                <div>{examples}</div>
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
