import React from 'react';

import ShInputText from 'sh-input-text';
import ShInputPhone from 'sh-input-phone';
import Code from '../util/code';
import ShForm from 'sh-form';
let codeText = {};

codeText.jsImport = `
import ShInputPhone from 'sh-input-Phone';
`;

codeText.jsState = `
  this.state = {
            val: ''
        };
        this.handleOneChange = this.handleOneChange.bind(this);
        this.test = this.test.bind(this);
`;

codeText.jsHandle = `
handleOneChange(number) {
        this.setState({val: number});
    }
`;

codeText.html = `
<ShInputPhone  label="Office Phone" value={this.state.val}  onChange={this.handleOneChange} />
<ShInputPhone  label="Office Phone" value={this.state.val}  onChange={this.handleOneChange} required/>
`;

class Basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            val2:''
        };
        this.handleOneChange = this.handleOneChange.bind(this);
        this.test = this.test.bind(this);
    }

    handleOneChange(number) {
        this.setState({val: number});

    }
    handleTwoChange(number) {
        this.setState({val2: number});

    }

    test(){
        console.log('test')
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
                    <ShForm >
                        <ShInputPhone  label="Office Phone" value={this.state.val} onBlur={this.test} onChange={this.handleOneChange} />
                        {this.state.val}
                        <br/>
                        <ShInputPhone  label="Required" value={this.state.val2}  onChange={this.handleTwoChange} required/>
                        {this.state.val2}

                    </ShForm>
                </div>
            </div>
        )
    }
}

export default Basic;
