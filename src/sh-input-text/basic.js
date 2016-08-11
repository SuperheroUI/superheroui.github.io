import React from 'react';

import ShInputText from 'sh-input-text';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShInputText from 'sh-input-text';
`;

codeText.jsState = `
this.state = {
    value: ''
};
`;

codeText.jsHandle = `
handleChange(newValue) {
    this.setState({
        value: newValue
    });
}
`;

codeText.html = `
<ShInputText label="A Text Field" value={this.state.value} onChange={this.handleChange} />
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
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Setup state</div>
                    {Code(codeText.jsState, 'javascript')}
                    <div className="title">Handle changes</div>
                    {Code(codeText.jsHandle, 'javascript')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'markup')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <ShInputText label="A Text Field" value={this.state.value} onChange={this.handleOneChange}/>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
