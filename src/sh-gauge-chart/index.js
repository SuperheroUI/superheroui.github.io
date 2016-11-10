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
                    <pre className="instructions">npm install sh-gauge-chart --save</pre>
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
                                <td>number</td>
                                <td> </td>
                                <td>The value to be displayed as a chart</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>100</td>
                                <td>The divisor</td>
                            </tr>
                            <tr>
                                <td>barHeight</td>
                                <td>number</td>
                                <td>10</td>
                                <td>The height of each rectangle</td>
                            </tr>
                            <tr>
                                <td>barCount</td>
                                <td>number</td>
                                <td>60</td>
                                <td>The numbers of rectangles that make up the complete circle</td>
                            </tr>
                            <tr>
                                <td>delay</td>
                                <td>number</td>
                                <td>1</td>
                                <td>number of milliseconds to wait before animating the next rectangle</td>
                            </tr>
                            <tr>
                                <td>props.children</td>
                                <td>Component</td>
                                <td></td>
                                <td>The content to display in the center of the gauge chart</td>
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
