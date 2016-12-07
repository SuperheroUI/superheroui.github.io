import React from 'react';

import ShToast from 'sh-toast';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShToast from 'sh-toast';
`;

codeText.jsHandle = `
openToast() {
        toast: new ShToast('Your content.', 'title', 'icon-envelope', 100,'custom')
        openMe() {
        this.state.toast.open().then(() => {
            return this.simulate();
        }).then(() => {
            return this.state.toast.close();
        })
    }
`;

codeText.html = `
<button className="sh-btn sh-btn-default" onClick={this.openToast}>Open Toast</button>
`;

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.openMe = this.openMe.bind(this);
    }

    openMe() {
        this.state.toast.open().then(() => {
            return this.simulate();
        }).then(() => {
            return this.state.toast.close();
        })
    }

    simulate() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('make request to save');
                resolve();
            }, 3000)
        });
    }

    render() {
        return (
            <div>
                <div className="col code">
                    <div className="title">Import service</div>
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Construct Toast</div>
                    {Code(codeText.jsHandle, 'javascript')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <button className="sh-btn sh-btn-default" onClick={this.openMe}>Toast</button>
                </div>
            </div>
        )
    }
}

export default Basic;
