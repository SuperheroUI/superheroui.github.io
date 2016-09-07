import React from 'react';

import Code from '../util/code';
import ShForm from 'sh-form';
import ShInputSelect from 'sh-input-select';
import ShInputText from 'sh-input-text';
import ShInputEmail from 'sh-input-email';

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
<ShForm onSubmit={this.onSubmit}>
    <ShInputText ... />
    <ShInputEmail ... />
    <ShInputSelect ... />
    <button className="btn btn-primary">Submit</button>
</ShForm>
`;

class Standard extends React.Component {
    constructor() {
        super();
        this.state = {
            submitted: 0,
            username: '',
            email: '',
            location: null,
        };

        this.locations = [
            {name: 'Utah'},
            {name: 'Nevada'},
            {name: 'Washington'},
        ];

        this.config = {
            required: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
    }

    onSubmit() {
        this.setState({
            submitted: this.state.submitted + 1
        });
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    changeLocation(newValue) {
        this.setState({
            location: newValue
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
                        <div style={{marginBottom: "20px"}}>
                            <ShInputText label="Username" value={this.state.username} onChange={this.changeUsername}
                                         required/>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <ShInputEmail label="Email" value={this.state.email} onChange={this.changeEmail} required/>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <ShInputSelect value={this.state.location} options={this.locations}
                                           onChange={this.changeLocation} config={this.config}/>
                        </div>
                        <div style={{marginBottom: "20px"}}>
                            <button className="btn btn-primary">Submit</button>
                        </div>
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
