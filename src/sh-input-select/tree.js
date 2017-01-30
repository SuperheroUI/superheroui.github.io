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
       {name: 'Documents', id: 1, parentId: null},
        {name: 'Pictures', id: 2, parentId: null},
        {name: 'budget.xls', id: 3, parentId: null},
        {name: 'resume.doc', id: 4, parentId: 1},
        {name: 'will.doc', id: 5, parentId: 1},
        {name: 'selfies', id: 6, parentId: 2},
        {name: 'headshot.jpg', id: 7, parentId: 2},
        {name: 'car.jpg', id: 8, parentId: 2},
        {name: 'vegas.jpg', id: 9, parentId: 6},
        {name: 'hawii.jpg', id: 10, parentId: 6},
    ],
    config: {
        tree: true
    }
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
<ShInputSelect options={this.state.options} value={this.state.value} onChange={this.handleChange} config={this.state.config} />
`;

class Tree extends React.Component {
    constructor() {
        super();

        this.options = [
            {name: 'Documents', id: 1, parentId: null},
            {name: 'Pictures', id: 2, parentId: null},
            {name: 'budget.xls', id: 3, parentId: null},
            {name: 'resume.doc', id: 4, parentId: 1},
            {name: 'will.doc', id: 5, parentId: 1},
            {name: 'selfies', id: 6, parentId: 2},
            {name: 'headshot.jpg', id: 7, parentId: 2},
            {name: 'car.jpg', id: 8, parentId: 2},
            {name: 'vegas.jpg', id: 9, parentId: 6},
            {name: 'hawii.jpg', id: 10, parentId: 6},
        ];

        this.config = {
            tree: true
        };

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
                    <ShInputSelect options={this.options} value={this.state.value} onChange={this.handleChange} config={this.config} />
                    <div className="title">Update</div>
                    <div className="details">
                        <button onClick={this.updateValue}>Change to 'budget.xls'</button>
                    </div>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Tree;
