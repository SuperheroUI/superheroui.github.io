import React from 'react';

import ShInputText from 'sh-input-text';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShInputText from 'sh-input-text';
`;

codeText.jsState = `
this.state = {
    Textvalue: ''
};
this.handleTextChange = this.handleTextChange.bind(this);
`;

codeText.jsHandle = `
handleTextChange(event) {
    this.setState({
        Textvalue: event.target.value;
    });
}
/*
* Takes in an event as default
*/
`;

codeText.html = `
<ShInputText label="A Text Field" value={this.state.Textvalue} onChange={this.handleTextChange} required/>
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
                    <ShInputText label="A Text Field" value={this.state.value} onChange={this.handleOneChange} required/>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
