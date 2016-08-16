import React from 'react';
import * as _ from 'lodash';
import Code from '../util/code';
import iconList from './icon-data'

require('./example.scss');

let codeText = {};

codeText.cssMain = `
require('../node_modules/sh-icons/bin/main.css');
`;
codeText.cssMain2 = `
{
    test: /\\.(ttf|eot|svg|woff)$/,
    loader: "url-loader"
},
`;
codeText.html = `
<i className="icon-phone"></i>
`;

var groupedList = _.chunk(iconList, 4);

class Usage extends React.Component {

    constructor() {
        super();
        this.state = {
            clickMe: 'wide'
        };

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe() {
        this.setState({
            clickMe: this.state.clickMe === 'wide' ? 'small' : 'wide'
        });
    }

    render() {
        let icons = groupedList.map((iconGroup, index) => {
            var iconRows = iconGroup.map((icons, iconIndex) => {
                return (
                    <td key={iconIndex}>
                        <i className={"icon-"+icons.name}></i>
                        <div className="table-label">{icons.name}</div>
                    </td>
                )
            });

            return (
                <tr key={index}>
                    {iconRows}
                </tr>
            )
        });

        return (
            <div>
                <div className="col code">
                    <div className="details">Install a new loader to handle the font files.</div>
                    <pre className="instructions">npm install url-loader --save-dev</pre>
                    <div className="details">Add the new loader to your list of loaders in webpack.config.js</div>
                    {Code(codeText.cssMain2, 'javascript')}
                    <div className="title">HTML</div>
                    {Code(codeText.html, 'jsx')}
                </div>
                <div className="col component">
                    <div className="title">About</div>
                    <div className="details">The images are now included as a font. Also CSS classes for each images can now be used to add
                        images to your page. Simply reference the CSS class in your html.</div>
                    <div className="title">List of Icons</div>
                    <div className="details">
                        <table className="icon-table">
                            <tbody>
                                {icons}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
export default Usage;
