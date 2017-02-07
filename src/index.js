import React from 'react';
import ReactDOM from 'react-dom';
import ShButtonsExamples from './sh-buttons';
import ShCoreExamples from './sh-core';
import ShFormExamples from './sh-form';
import ShGaugeChart from './sh-gauge-chart';
import ShIconsExamples from './sh-icons';
import ShInputCheckboxExamples from './sh-input-checkbox';
import ShInputCurrencyExamples from './sh-input-currency';
import ShInputEmailExamples from './sh-input-email';
import ShInputPasswordExamples from './sh-input-password';
import ShInputSelectExamples from './sh-input-select';
import ShInputTextExamples from './sh-input-text';
import ShModalDialog from './sh-modal-dialog';
import ShTabsExamples from './sh-tabs';
import ShToast from './sh-toast';
require('sh-core/bin/main.css');
require('./main.scss');

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                {name: 'ShCore', code: <ShCoreExamples />, repo: 'SuperheroUI/shCore', npm: 'sh-core'},
                {name: 'ShTabs', code: <ShTabsExamples />, repo: 'SuperheroUI/shTabs', npm: 'sh-tabs'},
                {
                    name: 'ShModalDialog',
                    code: <ShModalDialog />,
                    repo: 'SuperheroUI/shModalDialog',
                    npm: 'sh-modal-dialog'
                },
                {name: 'ShToast', code: <ShToast />, repo: 'SuperheroUI/shToast', npm: 'sh-toast'},
                {
                    name: 'ShGaugeChart',
                    code: <ShGaugeChart />,
                    repo: 'SuperheroUI/shGaugeChart',
                    npm: 'sh-gauge-chart',
                    hideCoverage: true
                },
                {
                    name: 'ShInputEmail',
                    code: <ShInputEmailExamples />,
                    repo: 'SuperheroUI/shInputEmail',
                    npm: 'sh-input-email'
                },
                {
                    name: 'ShInputSelect',
                    code: <ShInputSelectExamples />,
                    repo: 'SuperheroUI/shInputSelect',
                    npm: 'sh-input-select'
                },
                {
                    name: 'ShInputText',
                    code: <ShInputTextExamples />,
                    repo: 'SuperheroUI/shInputText',
                    npm: 'sh-input-text'
                },
                {
                    name: 'ShInputPassword',
                    code: <ShInputPasswordExamples />,
                    repo: 'SuperheroUI/shInputPassword',
                    npm: 'sh-input-password'
                },
                {
                    name: 'ShInputCurrency',
                    code: <ShInputCurrencyExamples />,
                    repo: 'SuperheroUI/shInputCurrency',
                    npm: 'sh-input-currency'
                },
                {
                    name: 'ShInputCheckbox',
                    code: <ShInputCheckboxExamples />,
                    repo: 'SuperheroUI/shInputCheckbox',
                    npm: 'sh-input-checkbox'
                },
                {name: 'ShForm', code: <ShFormExamples />, repo: 'SuperheroUI/shForm', npm: 'sh-form'},
                {
                    name: 'ShIcons',
                    code: <ShIconsExamples />,
                    repo: 'SuperheroUI/shIcons',
                    npm: 'sh-icons',
                    hideCoverage: true
                },
                {
                    name: 'ShButtons',
                    code: <ShButtonsExamples />,
                    repo: 'SuperheroUI/shButtons',
                    npm: 'sh-buttons',
                    hideCoverage: true
                }
            ],
            menuState: 'close'
        };

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        setTimeout(() => {
            this.setState({
                menuState: 'close'
            });
        }, 100)
    }

    openMenu() {
        this.setState({
            menuState: 'open'
        });
    }

    render() {
        let examples = this.state.examples.map((example, index) => {
            let metaData = null;
            if (example.repo) {
                let npmLink = null;
                if (example.npm) {
                    npmLink = <a href={'https://badge.fury.io/js/' + example.npm}><img
                        src={'https://badge.fury.io/js/' + example.npm + '.svg'} alt="npm version" height="18"/></a>;
                }

                let coverageLink = null;
                if (!example.hideCoverage) {
                    coverageLink =
                        <a className="coverage" href={'https://coveralls.io/github/' + example.repo + '?branch=master'}
                           target="_blank"><img
                            src={'https://coveralls.io/repos/github/' + example.repo + '/badge.svg?branch=master'}/></a>;
                }
                metaData = (
                    <span className="meta">
                        <a className="repo" href={'https://github.com/' + example.repo} target="_blank"><img
                            src="images/github.svg"/></a>
                        <a className="build" href={'https://travis-ci.org/' + example.repo} target="_blank"><img
                            src={'https://travis-ci.org/' + example.repo + '.svg?branch=master'}/></a>
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
                    <a href={'#' + example.name}>
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
                    <div className="navItem" tabIndex="0" onBlur={this.closeMenu}>
                        <a onClick={this.openMenu}>Components</a>
                        <div className={'navSelect ' + this.state.menuState} >
                            <div className="navSelectList" onClick={this.closeMenu}>
                                {navLinks}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header" id="home">
                    <div className="subHeader">
                        <img className="logo" src="images/logo.svg"/>
                        <div className="name">Superhero<span className="sub">UI</span></div>
                        <div className="subText">React components that are super awesome</div>
                    </div>
                </div>
                <div className="description">
                    <div className="title">Description</div>
                    <div className="details">SuperheroUI is a set of UI components built using React.</div>
                    <div className="details">Dependencies:
                        <ul>
                            <li><span className="depName">react</span> - Core for any react component</li>
                            <li><span className="depName">react-dom</span> - Needed for some of the dom manipulation
                            </li>
                            <li><span className="depName">lodash</span> - A great base for more functional programming
                            </li>
                        </ul>
                    </div>
                </div>

                <div>{examples}</div>
            </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
