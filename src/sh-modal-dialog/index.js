import React from 'react';

import Basic from './basic';

class ShModalDialogExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-modal-dialog</pre>
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
                            <td>Content Element</td>
                            <td>React Component</td>
                            <td> </td>
                            <td>This can be a react component or just plan JSX</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>string</td>
                            <td>''</td>
                            <td>The title of the Modal Dialog</td>
                        </tr>
                        <tr>
                            <td>Save Button</td>
                            <td>any</td>
                            <td>'Save'</td>
                            <td>Pass in a react component, jsx or a string.</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>promise</td>
                            <td></td>
                            <td>Call .open() to open the dialog, returns a promise</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>promise</td>
                            <td></td>
                            <td>Call .close() in the promise chain to close the dialog, returns a promise, you will need to add a catch for any errors.</td>
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

export default ShModalDialogExamples;
