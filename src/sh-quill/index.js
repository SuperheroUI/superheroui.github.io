import React from 'react';

import Basic from './basic';

class ShInputTextExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-quill --save</pre>
                </div>
                <div className="section">
                    <div className="title">JS Quill</div>
                    <div>ShQuill is a fork of JS Quill version 1.1.7. For the full documentation for JS Quill please go to <a href="http://quilljs.com/docs/api/">http://quilljs.com/docs/api/</a> </div>
                   <br/>
                    <div>Or for a quick start guide go to <a href="https://quilljs.com/docs/quickstart/">https://quilljs.com/docs/quickstart/</a> </div>
                    <br/>
                    <div className="title">Documentation</div>
                    <div>Full Documentation for ShQuill has been moved to the ShQuill GitHub page <a href="https://github.com/SuperheroUI/shQuill">https://github.com/SuperheroUI/shQuill</a></div>

                    <div></div>
                    <br/>
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
                            <td>className</td>
                            <td>String</td>
                            <td> </td>
                            <td>Adding the className of 'sm' will make it size better</td>
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

export default ShInputTextExamples;
