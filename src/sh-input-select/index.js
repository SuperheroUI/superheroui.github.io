import React from 'react';

import Basic from './basic';

class ShInputSelectExamples extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'Basic Example', code: <Basic /> }
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
                <div className="installation">
                    <div className="title">Installation</div>
                    <pre className="instructions">npm install sh-input-select --save</pre>
                </div>
                <div className="subExamples">
                    {examples}
                </div>
            </div>
        )
    }
}

export default ShInputSelectExamples;
