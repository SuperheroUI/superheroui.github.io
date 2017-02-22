import React from 'react';
import ShQuill from 'sh-quill';
import ReactDOM from 'react-dom';
import Code from '../util/code';

import 'sh-buttons/bin/main.css';
let codeText = {};

codeText.jsImport = `
import ShQuill from 'sh-quill';
`;

codeText.jsState = `
this.state = {
            value: '<div>beginning text</div>'
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
`;

codeText.jsHandle = `
updateValue() {
        this.setState({
            reason:
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <li>four</li>
</ul>
        })
    }
    
    handleOneChange(value) {
        this.setState({
            value: value
        })
    }
`;

codeText.html = `
 <ShQuill className="sm" value={this.state.reason} onChange={this.handleOneChange}/>
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "Welcome to Sh-Quill"
        };

        this.handleOneChange = this.handleOneChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    handleOneChange(value) {
        this.setState({
            value: value
        })
    }
    updateValue() {
        this.setState({
            value: `<ul>
                        <li>one</li>
                        <li>two</li>
                        <li>three</li>
                        <li>four</li>
                      </ul>`
        })
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
                    <div className="title">Update values</div>
                    {Code(codeText.jsHandle, 'javascript')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component"  >
                    <div id="squareBox-2">
                    <ShQuill className="sm" value={this.state.value}  onChange={this.handleOneChange} />

                    </div>
                    <div>
                    <div>

                    </div>
                    <div className="details">{JSON.stringify(this.state)}</div>


                    <button className="sh-btn sh-btn-default sh-btn-sm"  onClick={this.updateValue}>Update Value</button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Basic;
