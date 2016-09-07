import React from 'react';
import ReactDOM from 'react-dom';

import ShInputCheckboxExamples from './sh-input-checkbox';
import ShCoreExamples from './sh-core';
import ShTabsExamples from './sh-tabs';
import ShInputEmailExamples from './sh-input-email';
import ShInputSelectExamples from './sh-input-select';
import ShInputTextExamples from './sh-input-text';
import ShInputPasswordExamples from './sh-input-password';
import ShInputCurrencyExamples from './sh-input-currency';
import ShIconsExamples from './sh-icons';
import ShButtonsExamples from './sh-buttons';
import ShFormExamples from './sh-form';

require('sh-core/bin/main.css');
require('./main.scss');

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples:  [
                {name: 'ShCore', code: <ShCoreExamples />, repo: 'SuperheroUI/shCore', npm: 'sh-core'},
                {name: 'ShTabs', code: <ShTabsExamples />, repo: 'SuperheroUI/shTabs', npm: 'sh-tabs'},
                {name: 'ShInputEmail', code: <ShInputEmailExamples />, repo: 'SuperheroUI/shInputEmail', npm: 'sh-input-email'},
                {name: 'ShInputSelect', code: <ShInputSelectExamples />, repo: 'SuperheroUI/shInputSelect', npm: 'sh-input-select'},
                {name: 'ShInputText', code: <ShInputTextExamples />, repo: 'SuperheroUI/shInputText', npm: 'sh-input-text'},
                {name: 'ShInputPassword', code: <ShInputPasswordExamples />, repo: 'SuperheroUI/shInputPassword', npm: 'sh-input-password'},
                {name: 'ShInputCurrency', code: <ShInputCurrencyExamples />, repo: 'SuperheroUI/shInputCurrency', npm: 'sh-input-currency'},
                {name: 'ShInputCheckbox', code: <ShInputCheckboxExamples />, github: 'https://github.com/SuperheroUI/shInputCheckbox', npm: 'sh-input-checkbox'},
                {name: 'ShForm', code: <ShFormExamples />, repo: 'SuperheroUI/shForm', npm: 'sh-form'},
                {name: 'ShIcons', code: <ShIconsExamples />, repo: 'SuperheroUI/shIcons', npm: 'sh-icons', hideCoverage: true},
                {name: 'ShButtons', code: <ShButtonsExamples />, repo: 'SuperheroUI/shButtons', npm: 'sh-buttons', hideCoverage: true}
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
                let npmLink = null;
                if (example.npm) {
                    npmLink = <a href={'https://badge.fury.io/js/' + example.npm}><img src={'https://badge.fury.io/js/' + example.npm + '.svg'} alt="npm version" height="18" /></a>;
                }

                let coverageLink = null;
                if (!example.hideCoverage) {
                    coverageLink = <a className="coverage" href={'https://coveralls.io/github/' + example.repo + '?branch=master'} target="_blank"><img src={'https://coveralls.io/repos/github/' + example.repo + '/badge.svg?branch=master'} /></a>;
                }
                metaData = (
                    <span className="meta">
                        <a className="repo" href={'https://github.com/' + example.repo} target="_blank"><img src="images/github.svg" /></a>
                        <a className="build" href={'https://travis-ci.org/' + example.repo} target="_blank"><img src={'https://travis-ci.org/' + example.repo + '.svg?branch=master'} /></a>
                        {coverageLink}
                        {npmLink}
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
