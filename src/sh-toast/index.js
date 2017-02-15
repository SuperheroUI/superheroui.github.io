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
                    <pre className="instructions">npm install sh-modal-toast</pre>
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
                            <td>Content</td>
                            <td>Text only content</td>
                            <td>required</td>
                            <td>plan text</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>string</td>
                            <td>required</td>
                            <td>A title like Success or Fail</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>string</td>
                            <td>'icon-info'</td>
                            <td>Any sh-icon will be displayed pass the name of the icon class ie. 'sh-envelope'</td>
                        </tr>
                        <tr>
                            <td>timeout</td>
                            <td>int</td>
                            <td>2500</td>
                            <td>How long to wait before closing the toast notice 2.5 sec is really the min that will work</td>
                        </tr>
                        <tr>
                            <td>open</td>
                            <td>promise</td>
                            <td></td>
                            <td>Call .open() to open the dialog, returns a promise, call .close() to close it on your own after some middle promise</td>
                        </tr>
                        <tr>
                            <td>close</td>
                            <td>promise</td>
                            <td></td>
                            <td>Call .close() in the promise chain to close the dialog, returns a promise, you will need to add a catch for any errors.</td>
                        </tr>
                        <tr>
                            <td>custom class</td>
                            <td>string</td>
                            <td></td>
                            <td>a custom css class will be added to the toast so you can alter styles, adding a from-top class here will make the toast drop down from the top</td>
                        </tr>
                        <tr>
                            <td>from top</td>
                            <td>string</td>
                            <td></td>
                            <td>add from-top to make the sh-toast drop down from the top</td>
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
