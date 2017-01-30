import React from 'react';

import Basic from './basic';

class ShInputCurrencyExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-input-currency</pre>
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
                            <td>CurrencyValue</td>
                            <td>number</td>
                            <td> </td>
                            <td>Default value to set number to. Also will update when value changes.</td>
                        </tr>
                        <tr>
                            <td>handleCurrencyChange</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>handleCurrencyChange function called whenever value changes. DOM event is passed in. Get value with event.target.value.</td>
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

export default ShInputCurrencyExamples;
