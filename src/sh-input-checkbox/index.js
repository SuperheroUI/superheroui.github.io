import React from 'react';
import Basic from './basic';

class ShInputCheckboxExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-input-checkbox</pre>
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
                            <td>value</td>
                            <td>boolean</td>
                            <td> </td>
                            <td>Default value to set checkbox to.</td>
                        </tr>
                        <tr>
                            <td>handleChange</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>Callback function called whenever value changes.</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Set the required for sh-form and make itself red if required</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Disable the component from clicking, and add disabled styles</td>
                        </tr>
                        <tr>
                            <td>properties</td>
                            <td>attribute</td>
                            <td></td>
                            <td>All other attributes and listeners are passed down.</td>
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

export default ShInputCheckboxExamples;
