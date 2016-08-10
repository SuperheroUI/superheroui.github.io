import React from 'react';
import ReactDOM from 'react-dom';

import ShInputSelectExamples from './sh-input-select';

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'ShInputSelect', code: <ShInputSelectExamples /> }
            ]
        }
    }

    render() {
        let examples = this.state.examples.map((example, index) => {
            return (
                <div key={index} className="example">
                    <div className="title">{example.name}</div>
                    <div className="code">{example.code}</div>
                </div>
            )
        });

        return <div>{examples}</div>;
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));
