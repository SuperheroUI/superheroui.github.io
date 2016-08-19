import React from 'react';

import Standard from './standard';
import Card from './card';

class ShInputSelectExamples extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'Standard Example', code: <Standard /> },
                { name: 'Card Example', code: <Card /> },
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
                    <pre className="instructions">npm install sh-tabs --save</pre>
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
                                <td>tabs</td>
                                <td>array</td>
                                <td>[ ]</td>
                                <td>Default value to set select to. Also will update when value changes.</td>
                            </tr>
                            <tr>
                                <td>tabs[0].header</td>
                                <td>string | jsx</td>
                                <td> </td>
                                <td>Item to display at head of tab. When user clicks this it will switch to this tab.</td>
                            </tr>
                            <tr>
                                <td>tabs[0].content</td>
                                <td>string | jsx</td>
                                <td> </td>
                                <td>Item to display when this tab is active.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>'standard' | 'card'</td>
                                <td>'standard'</td>
                                <td>What type of tabs to show.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>function</td>
                                <td>{'(oldIndex, newIndex) => {...}'}</td>
                                <td>Callback function called whenever the tab changes. </td>
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

export default ShInputSelectExamples;
