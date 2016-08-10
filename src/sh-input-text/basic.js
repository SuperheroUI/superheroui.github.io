import React from 'react';

import ShInputText from 'sh-input-text';

class Basic extends React.Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };

        this.handleOneChange = this.handleOneChange.bind(this);
    }

    handleOneChange(event) {
        this.state.value = event.target.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <div className="component">
                    <ShInputText label="Example Pre Filled Data" value={this.state.value}
                                 onChange={this.handleOneChange}></ShInputText>
                </div>
                <div className="output">
                    <div className="title">State:</div>
                    <div className="details">{JSON.stringify(this.state)}</div>
                </div>
            </div>
        )
    }
}

export default Basic;
