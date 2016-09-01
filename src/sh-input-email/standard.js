import React from 'react';

import Code from '../util/code';
import ShInputEmail from 'sh-input-email';

let codeText = {};

codeText.jsImport = `
import ShInputEmail from 'sh-input-email';
`;

codeText.jsState = `
this.state = {
    value: ''
};
`;

codeText.jsHandle = `
onChange(event) {
    this.setState({
        value: event.target.value
    });
}
`;

codeText.html = `
<ShInputEmail label="Input 1" value={this.state.value} onChange={this.onChange} />
<ShInputEmail label="Input 1" value={this.state.value} onChange={this.onChange} required />
`;

class Standard extends React.Component {
    constructor() {
        super();
        this.state = {
            value1: '',
            value2: ''
        };

        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
    }

    onChange1(event) {
        this.setState({
            value1: event.target.value
        });
    }

    onChange2(event) {
        this.setState({
            value2: event.target.value
        });
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
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <ShInputEmail label="Input 1" value={this.state.value1} onChange={this.onChange1} />
                    <div className="title">Component Required</div>
                    <ShInputEmail label="Input 2" value={this.state.value2} onChange={this.onChange2} required />
                </div>
            </div>
        )
    }
}

export default Standard;
