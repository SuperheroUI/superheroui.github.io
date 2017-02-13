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
                    <div className="title">Documentation</div>
                    <div>Full Documentation for ShQuill has been moved to the GitHub page</div>
                    <a href="https://github.com/SuperheroUI/shQuill">https://github.com/SuperheroUI/shQuill</a>
                </div>
                <div className="section">
                    {examples}
                </div>
            </div>
        )
    }
}

export default ShInputTextExamples;
