import React from 'react';
import * as _ from 'lodash';
import ShLoading from 'sh-spinner';
import Code from '../util/code';

require('./example.scss');


let codeText = {};

codeText.jsImport = `
import ShSpinner from 'sh-spinner';
`;
codeText.jsDivSize = `
#squareBox {
    width: 200px;
    height: 200px;

}
`;

codeText.jsState = `
constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this)
    }
`;

codeText.html = `
<ShLoading shToggleSpinner={this.state.show} shLabel={'Loading'} shClass={'monkey'} shKey={'prospect-list-api-call'}/>
`;

class Standard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this)
    }

    open() {
        this.setState({
            show: true
        })
    }

    close() {
        this.setState({
            show: false
        })
    }

    render() {
        return (<div>
                <div className="col code">
                    <div className="title">Import component</div>
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.jsImport, 'javascript')}
                    <div className="title">Setup state</div>
                    {Code(codeText.jsState, 'javascript')}
                    <div className="title">Div sizing</div>
                    <div className="details">Sh-spinner needs to be bound in a square div to keep everything aligned properly. The size of Sh-spinner will scale according
                    to the size of the div that is wrapping it</div>
                    {Code(codeText.jsDivSize, 'css')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">Component</div>
                    <div>ShSpinner is a component used to track the time of tasks. It stores the initial time in local storage and then compares the time that it takes when you
                    start the task again, adjusting the circles movement rate accordingly so that you can know comparatively how long it is taking you to complete this new task.</div>

                    <br/>

                    <div className="loading" id="squareBox" >
                    <button className="sh-btn sh-btn-default sh-btn-sm" onClick={this.open}>open</button>
                    <button className="sh-btn sh-btn-default sh-btn-sm" onClick={this.close}>close</button>
                        <ShLoading shToggleSpinner={this.state.show} shLabel={'Loading'} shClass={'monkey'} />
                    </div>
                </div>
            </div>


        )
    }

}

export default Standard;