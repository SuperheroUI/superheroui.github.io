import React from 'react';

import Basic from './basic';

class ShInputPhone extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'Basic', code: <Basic /> }
            ]
        }
    }

    render() {
        let examples = this.state.examples.map((example, index) => {
            return (
                <div key={index} className="subExampleWrapper">
                    <div className="title">{example.name}</div>
                    <div className="subExample">{example.code}</div>
                </div>
            )
        });

        return (
            <div>
                <div className="section">
                    <div className="title">Installation</div>
                    <pre className="instructions">npm install sh-input-phone</pre>
                </div>
                <div className="section">
                    <div className="title">Overview</div>
                    <div>Sh-Input-Phone will auto format the phone number once it has the correct amount of numbers for a phone. If it isn't a valid<br/>
                    number for that region the input will not validate. Returns and saves the number back in international E164 format.
                    </div>
                    <br/>
                    <div className="title">Options</div>
                    <table className="options">
                        <thead>
                        <tr>
                            <th className="colName">Name</th>
                            <th className="colType">Type</th>
                            <th className="colDefault">Default</th>
                            <th className="colDescription">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Country</td>
                            <td></td>
                            <td>US</td>
                            <td>Drop down menu to select the international phone prefix you wish to call. Default is USA.</td>
                        </tr>
                        <tr>
                            <td>Label</td>
                            <td>String</td>
                            <td></td>
                            <td>The text you want to be displayed inside the phone input box</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td></td>
                            <td></td>
                            <td>Set this if you want the phone number to be required </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className="section">
                    {examples}
                </div>
            </div>
        )
    }
}

export default ShInputPhone;
