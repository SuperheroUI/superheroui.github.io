import React from 'react';

import ShInputSelect from 'sh-input-select';
import Code from '../util/code';

let codeText = {};

codeText.jsImport = `
import ShInputSelect from 'sh-input-select';
`;

codeText.jsState = `
this.state = {
    value: null,
    options: [
        {name: 'New', desc: 'New Contact', id: 1},
        {name: 'Contact', desc: 'Contact already established', id: 2},
        {name: 'Customer', desc: 'Bought Already', id: 3},
    ]
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
<ShInputSelect options={this.state.options} value={this.state.value} onChange={this.handleChange} />
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.options = [
            {name: 'New', desc: 'New Contact', id: 1},
            {name: 'Contact', desc: 'Contact already established', id: 2},
            {name: 'Customer', desc: 'Bought Already', id: 3},
        ];

        this.state = {
            value: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    handleChange(newValue) {
        this.setState({
            value: newValue
        });
    }

    updateValue() {
        this.setState({
            value: this.options[2]
        });
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
                    <ShInputSelect options={this.options} value={this.state.value} onChange={this.handleChange} />
                    <div className="title">Update</div>
                    <div className="details"><button onClick={this.updateValue}>Change to 'Customer'</button></div>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
