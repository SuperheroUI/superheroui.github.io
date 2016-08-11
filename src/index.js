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
                {name: 'ShInputSelect', code: <ShInputSelectExamples />},
                {name: 'ShInputText', code: <ShInputTextExamples />}
            ],
            menuState:'close'
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        if(this.state.menuState === 'close'){
            this.state.menuState = 'open'
        } else{
            this.state.menuState = 'close'
        }
        this.setState(this.state);
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

        let navLinks = this.state.examples.map((example, index) => {
            return (
                <div key={index} className="navSelectItem">
                    <a href={'#'+example.name}>
                        {example.name}
                    </a>
                </div>
            )
        });

        return (
            <div className="pageWrapper">
                <div className="nav">
                    <div className="navItem">
                        <a href="#home">Home</a>
                    </div>
                    <div className="navItem">
                        <a onClick={this.toggleMenu}>Components</a>
                        <div className={'navSelect '+this.state.menuState} >
                            <div className="navSelectList" onClick={this.toggleMenu}>
                                {navLinks}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header" id="home">
                    Superhero<span className="sub">UI</span>
                    <div className="subText">react components that are really super awesome</div>
                </div>
                <div>{examples}</div>
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
