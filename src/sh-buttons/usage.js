import React from 'react';
import * as _ from 'lodash';
import Code from '../util/code';

require('./example.scss');

let codeText = {};

codeText.html = `
<button className="sh-btn sh-btn-default">A default button</button>
<button className="sh-btn sh-btn-default sh-btn-sm">A small button</button>
<button className="sh-btn sh-btn-default disabled">A disabled button</button>
`;
codeText.cssMain = `
require('sh-buttons/bin/main.css');
`;


class Usage extends React.Component {

    constructor() {
        super();
        this.state = {
            clickMe: 'wide'
        };

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        this.setState({
            clickMe: this.state.clickMe === 'wide' ? 'small' : 'wide'
        });
    }

    render() {
        return (
            <div>
                <div className="col code">
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.cssMain, 'javascript')}
                </div>
                <div className="col component">
                    <div className="title">About</div>
                    <p>The button styles for 4 states; active, disabled hover and focus. Each button will have two
                        classes
                        the base class btn and the color class. Add the class sm to make a small button.</p>
                    <div className="title">Button Classes</div>
                    <table className="btn-table">
                        <tbody>
                        <tr>
                            <td>
                                <button className="sh-btn sh-btn-primary">primary</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-primary disabled">disabled</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-primary sh-btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="sh-btn sh-btn-default">default</button>

                            </td>
                            <td>
                                <button className="sh-btn sh-btn-default disabled">disabled</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-default btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="sh-btn sh-btn-error">error</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-error disabled">disabled</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-error sh-btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="sh-btn sh-btn-neural">neural</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-neural disabled">disabled</button>
                            </td>
                            <td>
                                <button className="sh-btn sh-btn-neural btn-sm">small</button>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Usage;
