import React from 'react';

import Basic from './basic';

class ShInputPasswordExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-input-password</pre>
                </div>
                <div className="section">
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
                            <td>PasswordValue</td>
                            <td>any</td>
                            <td> </td>
                            <td>Default value to set password to. Also will update when value changes.</td>
                        </tr>
                        <tr>
                            <td>handlePasswordChange</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>handlePasswordChange function called whenever value changes. DOM event is passed in. Get value with event.target.value.</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Set the html required flag on the input field.</td>
                        </tr>
                        <tr>
                            <td>properties</td>
                            <td>attribute</td>
                            <td></td>
                            <td>All other attributes and listeners are passed down.</td>
                        </tr>
                        <tr>
                            <td>checkPassword</td>
                            <td>function</td>
                            <td>A password should have at least 8 characters</td>
                            <td>A validation function that will be executed by the password field is passed the password as a parameter. If it returns true then the password field will be marked as invalid.</td>
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

export default ShInputPasswordExamples;
