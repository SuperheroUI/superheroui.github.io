import React from 'react';

import Standard from './standard';

class ShInputEmailExamples extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'Standard Example', code: <Standard /> },
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
                    <pre className="instructions">npm install sh-input-email --save</pre>
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
                                <td>label</td>
                                <td>string</td>
                                <td> </td>
                                <td>Label to display with input</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>string</td>
                                <td> </td>
                                <td>Default value to be assigned to input</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>function</td>
                                <td> </td>
                                <td>Standard input onChange, DOM event is passed in. Get value with event.target.value.</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>If input is required, will flag as invalid is no email is present.</td>
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

export default ShInputEmailExamples;
