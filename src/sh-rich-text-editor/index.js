import React from 'react';

import Basic from './basic';

class ShRichTextEditorExamples extends React.Component {
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
                    <pre className="instructions">npm install sh-rich-text-editor</pre>
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
                            <td>string</td>
                            <td> </td>
                            <td>Default value to set text to. Also will update when value changes.</td>
                        </tr>
                        <tr>
                            <td>label</td>
                            <td>string</td>
                            <td> </td>
                            <td>Label text that will be displayed inside the field.</td>
                        </tr>
                        <tr>
                            <td>onChange</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>Callback function called whenever value changes.</td>
                        </tr>
                        <tr>
                            <td>onChangeSelection</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>Callback function called whenever selection (selected text) changes.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>Callback function called whenever editor gains focus.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>function</td>
                            <td>noop</td>
                            <td>Callback function called whenever editor loses focus.</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Set the html required flag on the input field.</td>
                        </tr>
                        <tr>
                            <td>defaultFont</td>
                            <td>string</td>
                            <td> </td>
                            <td>Default font to use.</td>
                        </tr>
                        <tr>
                            <td>defaultFontSize</td>
                            <td>string</td>
                            <td> </td>
                            <td>Default font size to use.</td>
                        </tr>
                        <tr>
                            <td>toolbarItems</td>
                            <td>array</td>
                            <td>Default QuillJS toolbar</td>
                            <td>List of items that will be displayed in the editor toolbar.</td>
                        </tr>
                        <tr>
                            <td>validator</td>
                            <td>object</td>
                            <td>null</td>
                            <td>Validator object to validate contents of this field.</td>
                        </tr>
                        <tr>
                            <td>properties</td>
                            <td>attribute</td>
                            <td></td>
                            <td>All other attributes and listeners are passed down.</td>
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

export default ShRichTextEditorExamples;
