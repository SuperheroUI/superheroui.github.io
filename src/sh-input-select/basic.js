import React from 'react';

import ShInputSelect from 'sh-input-select';

class Basic extends React.Component {
    constructor() {
        super();

        this.options = [
            {name: 'New', desc: 'New Contact', id: 1},
            {name: 'Contact', desc: 'Contact already established', id: 2},
            {name: 'Customer', desc: 'Bought Already', id: 3},
        ];

        this.state = {
            value: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(newValue) {
        this.setState({
            value: newValue
        });
    }

    render() {
        return (
            <div>
                <ShInputSelect options={this.options} value={this.state.value} onChange={this.handleChange} />
                <div className="output">
                    <div className="title">State:</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
