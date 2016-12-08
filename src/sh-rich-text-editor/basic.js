import React from 'react';

import ShRichTextEditor from 'sh-rich-text-editor';
import Code from '../util/code';

require('./example.scss');

let codeText = {};

codeText.jsImport = `
import ShRichTextEditor from 'sh-rich-text-editor';
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
<ShRichTextEditor label="Text" value={this.state.value} onChange={this.handleChange} />
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            text: "This is a test"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newVal) {
        this.state.text = newVal;
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
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <ShRichTextEditor value={this.state.text} required={false} onChange={this.handleChange} 
                    label="Text" defaultFont="Serif" defaultFontSize="Medium" />
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;