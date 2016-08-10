import React from 'react';

import Basic from './basic';

class ShInputSelectExamples extends React.Component {
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
                <div key={index} className="subExample">
                    <div className="title">{example.name}</div>
                    <div className="code">{example.code}</div>
                </div>
            )
        });

        return (
            <div>
                <div className="installation">
                    <div className="title">Installation</div>
                    <div className="instructions">npm install sh-input-select</div>
                </div>
                <div className="subExamples">
                    {examples}
                </div>
            </div>
        )
    }
}

export default ShInputSelectExamples;
