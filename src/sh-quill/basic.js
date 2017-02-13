import React from 'react';
import ShQuill from 'sh-quill';
import ShInputText from 'sh-input-text';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShQuill from 'sh-quill';
`;

codeText.jsState = `
this.state = {
            reason: '<div>beginning text</div>'
        };

        this.handleChange = this.handleChange.bind(this);
`;

codeText.jsHandle = `
handleChange() {
        this.setState({
            reason: <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
</ul>
        })
    }
`;

codeText.html = `
 <ShQuill className="sm" value={this.state.reason}/>
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


                    <ShQuill className="sm"/>

                </div>
            </div>
        )
    }
}

export default Basic;
