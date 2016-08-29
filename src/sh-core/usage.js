import React from 'react';

import Code from '../util/code';

require('./example.scss');

let codeText = {};

codeText.cssMain = `
require('sh-core/bin/main.css');
`;
codeText.cssMain2 = `
{
    test: /\\.(ttf)$/,
    loader: "url-loader"
},
`;

codeText.scssBase = `
@import '../node_modules/sh-core/src/base';
`;

codeText.scssColor = `
.background1 {
    padding: 20px;
    color: $color-font;
    background: $color-primary;
    border-radius: $size-border-radius;
}
`;

codeText.scssEllipse = `
.ellipse1 {
    width: 200px;
    @include ellipsis;
}
`;

codeText.scssFont = `
.font1 {
    font-family: $font-family-condensed;
    font-size: $size-font4;
    font-weight: $font-weight-light;
    color: $color-font;
}
`;

codeText.scssTransition = `
.transition1 {
    width: 100px;
    padding: 20px;
    background: $color-box-background4;
    transition: width $transition, background $transition-hover;

    &:hover {
        background: $color-box-background2;
    }

    &.wide {
        width: 200px;
    }
}
`;

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
        return (
            <div>
                <div className="col code">
                    <div className="title">Include Main CSS</div>
                    <div className="details">This CSS file includes a minimal CSS reset for browsers. It also has a
                        standard &lt;body&gt; style. This includes the fonts.
                    </div>
                    <div className="details">Install a new loader to handle the font files.</div>
                    <pre className="instructions">npm install url-loader --save-dev</pre>
                    <div className="details">Add the new loader to your list of loaders in webpack.config.js</div>
                    {Code(codeText.cssMain2, 'javascript')}
                    <div className="details">Add this line to your entry JS file.</div>
                    {Code(codeText.cssMain, 'javascript')}
                    <div className="title">Include Base SCSS</div>
                    <div className="details">This SCSS file can be included on your SCSS files to provide mixins for
                        standard processes and variables for colors.
                    </div>
                    {Code(codeText.scssBase, 'scss')}
                    <div className="title">Set Color</div>
                    {Code(codeText.scssColor, 'scss')}
                    <div className="title">Add Ellipse</div>
                    <div className="details">For ellipse to work they need to have a width, either a % or static.</div>
                    {Code(codeText.scssEllipse, 'scss')}
                    <div className="title">Change Font</div>
                    {Code(codeText.scssFont, 'scss')}
                    <div className="title">Using Transitions</div>
                    <div className="details">We have some defaults for transitions for hover and standard, specifically
                        time and ease.
                    </div>
                    {Code(codeText.scssTransition, 'scss')}
                </div>
                <div className="col component specialScssUsage">
                    <div className="title">Set Color</div>
                    <div className="details">
                        <div className="background1">Using color variables</div>
                    </div>
                    <div className="title">Add Ellipse</div>
                    <div className="details">
                        <div className="ellipse1">This is some really long text. See how long it is.</div>
                    </div>
                    <div className="title">Font Changes</div>
                    <div className="details">
                        <div className="font1">This font has standard changes.</div>
                    </div>
                    <div className="title">Using Transitions</div>
                    <div className="details">
                        <div className={'transition1 ' + this.state.clickMe} onClick={this.clickMe}>Click Me</div>
                    </div>

                    <div className="title">Default Colors</div>
                    <div className="details">isCore comes with several default colors. Stick to this color pallet and keep your app
                        consistent with design standards. Use color variables, do not hard code any colors into your app.
                        Explore the _bases.scss file for a full list of sass variables. (node_modules/sh-core/src/_base.scss)
                    </div>

                    <div className="title">$color-primary</div>
                    <div className="primary-block"></div>
                    <div className="title">$color-secondary</div>
                    <div className="secondary-block"></div>
                    <div className="title">$color-thrirdary</div>
                    <div className="thirdary-block"></div>
                    <div className="title">$color-neural</div>
                    <div className="neural-block"></div>
                    <div className="title">$color-error</div>
                    <div className="error-block"></div>

                </div>
            </div>
        )
    }
}
export default Usage;
