import React from 'react';

import Basic from './basic';
import Complex from './complex';
import Tree from './tree';

class ShInputSelectExamples extends React.Component {
    constructor() {
        super();

        this.state = {
            examples: [
                { name: 'Basic Example', code: <Basic /> },
                { name: 'Complex Example', code: <Complex /> },
                { name: 'Tree Example', code: <Tree /> },
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
                    <pre className="instructions">npm install sh-input-select --save</pre>
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
                                <td>value</td>
                                <td>any</td>
                                <td> </td>
                                <td>Default value to set select to. Also will update when value changes.</td>
                            </tr>
                            <tr>
                                <td>options</td>
                                <td>array</td>
                                <td>[ ]</td>
                                <td>List of options for the user to choose between.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>function</td>
                                <td>noop</td>
                                <td>Callback function called whenever value changes.</td>
                            </tr>
                            <tr>
                                <td>config</td>
                                <td>object</td>
                                <td> </td>
                                <td>Config object</td>
                            </tr>
                            <tr>
                                <td>config.getDisplay</td>
                                <td>function</td>
                                <td>option.name || option</td>
                                <td>How to display the options to the user.</td>
                            </tr>
                            <tr>
                                <td>config.multiselect</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Allows the user to select more than one option. This will make and expect 'value' to be an array.</td>
                            </tr>
                            <tr>
                                <td>config.idField</td>
                                <td>string</td>
                                <td>null</td>
                                <td>If this field is present then it will use this value to pass to 'onChange' and expect this value out of 'value'.</td>
                            </tr>
                            <tr>
                                <td>config.tree</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>This will setup the select from a tree of data (like a directory structure).</td>
                            </tr>
                            <tr>
                                <td>config.treeHasChildren</td>
                                <td>function</td>
                                <td title="(options, option) => { return !!_.find(options, {parentId: option.id}); }">{'(options, option) => { }'}</td>
                                <td>Function to call when checking to see if an option has any children. Default checks the 'id' against a 'parentId'. Only used when config.tree == true.</td>
                            </tr>
                            <tr>
                                <td>config.treeGetChildren</td>
                                <td>function</td>
                                <td title="(options, option) => { return _.filter(options, {parentId: (option ? option.id : null)}); }">{'(options, option) => { }'}</td>
                                <td>Function to call when getting the children from a parent. Default checks the 'id' against a 'parentId'. Only used when config.tree == true.</td>
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

export default ShInputSelectExamples;
