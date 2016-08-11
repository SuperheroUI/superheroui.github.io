import React from 'react';
import Prism from 'prismjs';
import PrismJSX from 'prismjs/components/prism-jsx';

require('../../node_modules/prismjs/themes/prism-tomorrow.css');

let CodeService = (codeString, languageName) => {
    let codeHighlighted = Prism.highlight(codeString, Prism.languages[languageName]);
    return <pre><code className={'language-' + languageName} dangerouslySetInnerHTML={{__html: codeHighlighted}} /></pre>
};

export default CodeService;
