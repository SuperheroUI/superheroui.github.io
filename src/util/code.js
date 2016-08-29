import React from 'react';
import Prism from 'prismjs';

// Include additional language formatting
import PrismJSX from 'prismjs/components/prism-jsx';
import PrismSCSS from 'prismjs/components/prism-scss';

require('prismjs/themes/prism-tomorrow.css');

let CodeService = (codeString, languageName) => {
    let codeHighlighted = Prism.highlight(codeString, Prism.languages[languageName]);
    return <pre><code className={'language-' + languageName} dangerouslySetInnerHTML={{__html: codeHighlighted}} /></pre>
};

export default CodeService;
