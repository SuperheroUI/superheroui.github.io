import React from 'react';

import Code from '../util/code';
import ShForm from 'sh-form';
import ShInputSelect from 'sh-input-select';

let codeText = {};

codeText.jsImport = `
import ShForm from 'sh-form';
`;

codeText.jsState = `
this.state = {
    submitted: 0
};
`;

codeText.jsHandle = `
onSubmit() {
    this.setState({
        submitted: this.state.submitted + 1
    });
}
`;

codeText.html = `
<ShForm onSubmit={this.onSubmit} />
`;

class Standard extends React.Component {
    constructor() {
        super();
        this.state = {
            submitted: 0,
            option1: null,
            option2: null,
        };

        this.options = [
            {name: 'Utah'},
            {name: 'Nevada'},
            {name: 'Washington'},
        ];

        this.config = {
            required: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.change1 = this.change1.bind(this);
        this.change2 = this.change2.bind(this);
    }

    onSubmit() {
        this.setState({
            submitted: this.state.submitted + 1
        });
    }

    change1(newValue) {
        this.setState({
            option1: newValue
        });
    }

    change2(newValue) {
        this.setState({
            option2: newValue
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
                    <ShForm onSubmit={this.onSubmit}>
                        <div>
                            <ShInputSelect value={this.state.option1} options={this.options} onChange={this.change1} config={this.config} />
                        </div>
                        <ShInputSelect value={this.state.option2} options={this.options} onChange={this.change2} config={this.config} />
                        <button className="btn btn-primary">Submit</button>
                    </ShForm>
                    <div>
                        {JSON.stringify(this.state)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Standard;
