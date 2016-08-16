import React from 'react';

import Usage from './usage';

class ShIconsExamples extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                {name: 'Usage', code: <Usage />},
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
                    <pre className="instructions">npm install sh-buttons --save</pre>
                </div>
                <div className="section">
                    {examples}
                </div>
            </div>
        )
    }
}

export default ShIconsExamples;
