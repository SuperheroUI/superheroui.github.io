import React from 'react';

import ShModalDialog from 'sh-modal-dialog';
import ModalContent from './modal-content';
import Code from '../util/code';
let codeText = {};

codeText.jsImport = `
import ShModalDialog from 'sh-modal-dialog';
`;

codeText.jsState = `
this.state = {
    value: ''
};
this.openDialog = this.openDialog.bind(this);
`;

codeText.jsHandle = `
openDialog() {
        const dialog = new ShModalDialog(<MyModalContent />, 'Service Modal', 'OK', 'sh-small');
        dialog.open().then(()=> {
            return this.MyFunctionThatReturnsAPromise();
        }).then(()=> {
            return dialog.close();
        }).catch((e)=>{
            console.log(e)
        });
    }
`;

codeText.html = `
<button className="sh-btn sh-btn-default" onClick={this.openDialog}>Open Dialog</button>
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
        const dialog = new ShModalDialog(<ModalContent />, 'Service Modal', 'OK', 'sh-small');
        console.log(dialog)
        dialog.open().then(()=> {
            return this.simulate();
        }).then(()=> {
            return dialog.close();
        }).catch((e)=>{
            console.log(e)
        });
    }

    simulate() {
        const test = ()=> {
            return new Promise((r, err)=> {
                setTimeout(()=> {
                    console.log('Doing async stuff...');
                    r();
                }, 1000)
            });
        };

        return test().then(()=> {
            this.setState({value: 'All done with stuff.'});
        })
    }

    render() {
        return (
            <div>
                <div className="col code">
                    <div className="title">Import service</div>
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Setup state</div>
                    {Code(codeText.jsState, 'javascript')}
                    <div className="title">Construct Dialog</div>
                    {Code(codeText.jsHandle, 'javascript')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <button className="sh-btn sh-btn-default" onClick={this.openMe}>Open</button>
                    <div className="title">State</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
