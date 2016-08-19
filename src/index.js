import React from 'react';
import ReactDOM from 'react-dom';

import ShInputCheckboxExamples from './sh-input-checkbox';
import ShCoreExamples from './sh-core';
import ShTabsExamples from './sh-tabs';
import ShInputSelectExamples from './sh-input-select';
import ShInputTextExamples from './sh-input-text';
import ShIconsExamples from './sh-icons';
import ShButtonsExamples from './sh-buttons';

require('../node_modules/sh-core/bin/main.css');
require('./main.scss');

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples:  [
                {name: 'ShCore', code: <ShCoreExamples />, github: 'https://github.com/SuperheroUI/shCore'},
                {name: 'ShTabs', code: <ShTabsExamples />, repo: 'SuperheroUI/shTabs'},
                {name: 'ShInputSelect', code: <ShInputSelectExamples />, repo: 'SuperheroUI/shInputSelect'},
                {name: 'ShInputText', code: <ShInputTextExamples />, github: 'https://github.com/SuperheroUI/shInputText'},
                {name: 'ShInputCheckbox', code: <ShInputCheckboxExamples />, github: 'https://github.com/SuperheroUI/shInputCheckbox'},
                {name: 'ShIcons', code: <ShIconsExamples />, github: 'https://github.com/SuperheroUI/shIcons'},
                {name: 'ShButtons', code: <ShButtonsExamples />, github: 'https://github.com/SuperheroUI/shButtons'}
            ],
            menuState:'close'
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            menuState: this.state.menuState === 'close' ? 'open' : 'close'
        });
    }

    render() {
        let examples = this.state.examples.map((example, index) => {
            let metaData = null;
            if (example.github) {
                metaData = (
                    <span className="meta">
                        <a className="repo" href={example.github} target="_blank"><img src="images/github.svg" /></a>
                    </span>
                );
            } else if (example.repo) {
                metaData = (
                    <span className="meta">
                        <a className="repo" href={'https://github.com/' + example.repo} target="_blank"><img src="images/github.svg" /></a>
                        <a className="build" href={'https://travis-ci.org/' + example.repo} target="_blank"><img src={'https://travis-ci.org/' + example.repo + '.svg?branch=master'} /></a>
                    </span>
                );
            }

            return (
                <div key={index} className="example" id={example.name}>
                    <div className="title">{example.name}{metaData}</div>
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
                    <div className="subHeader">
                        <img className="logo" src="images/logo.svg" />
                        <div className="name">Superhero<span className="sub">UI</span></div>
                        <div className="subText">React components that are really super awesome</div>
                    </div>
                </div>
                <div className="description">
                    <div className="title">Description</div>
                    <div className="details">SuperheroUI is a set of UI components built using React. The goal is to make independent components that do not rely on each other for versions. This makes updating one component easy to update.</div>
                    <div className="details">Dependencies:
                        <ul>
                            <li><span className="depName">react</span> - core for any react component</li>
                            <li><span className="depName">react-dom</span> - needed for some of the dom manipulation we do</li>
                            <li><span className="depName">lodash</span> - we use this has a great base for more functional programming</li>
                        </ul>
                    </div>
                </div>

                <div>{examples}</div>
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
