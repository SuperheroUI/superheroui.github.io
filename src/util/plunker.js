import React from 'react';
import * as _ from 'lodash';

let createLink = (exampleFile) => {
    let postData = {};
    postData['tags[0]'] = "react";
    postData['tags[1]'] = "superheroui";
    postData['tags[2]'] = "example";
    postData['private'] = true;
    postData['description'] = 'SuperheroUI example';

    postData['files[index.html]'] =
        '<!doctype html>\n'+
        '<html>\n' +
        '<head>\n' +
        '    <title>Superhero UI - Example</title>\n' +
        '    <script data-require="react@*" data-semver="15.3.0" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>\n' +
        '    <script data-require="react@*" data-semver="15.3.0" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>\n' +
        '</head>\n' +
        '<body>\n' +
        '    <div id="example"></div>\n' +
        '    <script src="example.js"></script>\n' +
        '</body>\n' +
        '</html>\n'
    ;

    postData['files[example.jsx]'] = exampleFile;

    return () => {

        let form = document.createElement('form');
        form.method = 'post';
        form.action = 'http://plnkr.co/edit/?p=preview';
        form.target = '_blank';

        _.forEach(postData, (value, key) => {
            let input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input)
        });

        form.submit();
    };
};

export default createLink;
