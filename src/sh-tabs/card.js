import React from 'react';

import ShTabs from 'sh-tabs';
import Code from '../util/code';

let codeText = {};

codeText.jsImport = `
import ShTabs from 'sh-tabs';
`;

codeText.jsState = `
this.state = {
    tabs: [
        {header: 'User Info', content: <div><h1>User info here!</h1><p>Hello user info</p></div>},
        {header: 'Company Info', content: <div>Company info here</div>},
        {header: 'Settings', content: <div>All Settings are listed here</div>},
    ]
};
`;

codeText.jsHandle = `
handleChange(oldIndex, newIndex) {
    console.log('Changes', oldIndex, newIndex);
}
`;

codeText.html = `
<ShTabs tabs={this.tabs} type="card" onChange={this.handleChange} />
`;

class Card extends React.Component {
    constructor() {
        super();

        this.tabs = [
            {header: 'User Info', content: <div><h1>User info here!</h1><p>Hello user info</p></div>},
            {header: 'Company Info', content: <div>Company info here</div>},
            {header: 'Settings', content: <div>All Settings are listed here</div>},
        ];

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(oldIndex, newIndex) {
        console.log('Changes', oldIndex, newIndex);
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
                    <div style={{height: '200px'}}>
                        <ShTabs tabs={this.tabs} type="card" onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
