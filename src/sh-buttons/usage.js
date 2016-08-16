import React from 'react';
import * as _ from 'lodash';
import Code from '../util/code';

require('./example.scss');

let codeText = {};

codeText.html = `
<button class="btn btn-default">A default button</button>
<button class="btn btn-default btn-sm">A small button</button>
<button class="btn btn-default disabled">A disabled button</button>
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
                                <button className="btn btn-primary">primary</button>
                            </td>
                            <td>
                                <button className="btn btn-primary disabled">disabled</button>
                            </td>
                            <td>
                                <button className="btn btn-primary btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-default">default</button>

                            </td>
                            <td>
                                <button className="btn btn-default disabled">disabled</button>
                            </td>
                            <td>
                                <button className="btn btn-default btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-error">error</button>
                            </td>
                            <td>
                                <button className="btn btn-error disabled">disabled</button>
                            </td>
                            <td>
                                <button className="btn btn-error btn-sm">small</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-neural">neural</button>
                            </td>
                            <td>
                                <button className="btn btn-neural disabled">disabled</button>
                            </td>
                            <td>
                                <button className="btn btn-neural btn-sm">small</button>
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
