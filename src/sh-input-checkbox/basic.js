import React from 'react';

import ShInputCheckbox from 'sh-input-checkbox';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShInputCheckbox from 'sh-input-checkbox';
`;

codeText.jsState = `
this.state = {
    value: ''
};
this.handleChange = this.handleChange.bind(this);
`;

codeText.jsHandle = `
handleChange(newValue) {
    this.setState({
        value: newValue
    });
}
`;

codeText.html = `
<ShInputCheckbox value={this.state.value} onChange={this.handleChange} />
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({value: value});
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
                    <ShInputCheckbox value={this.state.value} onChange={this.handleChange}/>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
