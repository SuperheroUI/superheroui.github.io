import React from 'react';

import Standard from './standard';

class ShFormExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-form --save</pre>
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
                                <td>onSubmit</td>
                                <td>function</td>
                                <td> </td>
                                <td>Function to run when a submit event is fired. Will validate children components first and if all is valid will submit.</td>
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

export default ShFormExamples;
