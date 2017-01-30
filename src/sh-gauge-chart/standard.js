import React from 'react';
import * as _ from 'lodash';

import Code from '../util/code';
import ShGaugeChart from 'sh-gauge-chart';

let codeText = {};

codeText.jsImport = `
import ShGaugeChart from 'sh-gauge-chart';
`;

codeText.jsState = `
this.state = {
    value: 50
};
this.update = this.update.bind(this);
`;

codeText.html = `
<ShGaugeChart value={this.state.value}>{this.state.value}</ShGaugeChart>
`;

class Standard extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 50
        };
        this.update = this.update.bind(this);
    }

    update() {
        console.log('smash')
        this.setState({
            value: _.random(1, 100)
        });
    }

    render() {
        return (<div>
                <div className="col code">
                    <div className="title">Import component</div>
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Setup state</div>
                    {Code(codeText.jsState, 'javascript')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <div style={{textAlign: 'center'}}>
                        <button className="sh-btn sh-btn-primary" onClick={this.update}>Random Number</button>
                        <br/><br/>
                        <div style={{width: 100, margin: '0 auto'}}>
                            <div style={{width: 100, height: 100, fontSize: 40}}>
                                <ShGaugeChart value={this.state.value}>{this.state.value}</ShGaugeChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Standard;
