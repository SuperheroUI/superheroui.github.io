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
                    <pre className="instructions">npm install sh-spinner --save</pre>
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
                            <td>shToggleSpinner</td>
                            <td>boolean</td>
                            <td>False</td>
                            <td>Toggles the start of shSpinner </td>
                        </tr>
                        <tr>
                            <td>shComponentName</td>
                            <td>String </td>
                            <td></td>
                            <td>Name identifier for the component</td>
                        </tr>
                        <tr>
                            <td>shLabel</td>
                            <td>String</td>
                            <td></td>
                            <td>The Text that goes inside the center of the Spinner</td>
                        </tr>
                        <tr>
                            <td>shkey</td>
                            <td>String</td>
                            <td></td>
                            <td>Unique identifier to save the time of the task in local storage</td>
                        </tr>
                        <tr>
                            <td>shClass</td>
                            <td>String</td>
                            <td></td>
                            <td>For additional custom CSS styling</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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
