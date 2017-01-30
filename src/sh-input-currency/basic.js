import React from 'react';

import ShInputCurrency from 'sh-input-currency';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import Currency from 'sh-input-currency';
`;

codeText.jsState = `
this.state = {
    CurrencyValue: ''
};
 this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
`;

codeText.jsHandle = `
handleCurrencyChange(event) {
    this.setState({
        CurrencyValue: event.target.value;
    });
}
/*
* Takes in an event as default
*/
`;

codeText.html = `
<ShInputCurrency label="A Currency Field" value={this.state.CurrencyValue} onChange={this.handleCurrencyChange} />
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleOneChange = this.handleOneChange.bind(this);
    }

    handleOneChange(event) {
        this.state.value = event.target.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <div className="col code">
                    <div className="title">Import component</div>
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Setup state</div>
                    {Code(codeText.jsState, 'javascript')}
                    <div className="title">Handle changes</div>
                    {Code(codeText.jsHandle, 'javascript')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <ShInputCurrency label="A Currency Field" value={this.state.value} onChange={this.handleOneChange}/>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
