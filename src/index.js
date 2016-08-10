import React from 'react';
import ReactDOM from 'react-dom';

import ShInputSelectExamples from './sh-input-select';
import ShInputTextExamples from './sh-input-text';

require('./main.scss');

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'ShInputSelect', code: <ShInputSelectExamples /> },
                { name: 'ShInputText', code: <ShInputTextExamples /> }
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
