import React from 'react';
import marked from 'marked';
import './Viewer.css';
import hljs from 'highlight.js';
// import '../../../node_modules/highlight.js/styles/github.css';

var renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
    return `<a href=${href} target="_blank">${text}</a>`;
}

marked.setOptions({
    renderer,
    highlight: (code) => {
        return hljs.highlightAuto(code).value;
    },
    breaks: true
});

class Viewer extends React.Component {
    render() {
        return (
            <div className="viewer">
                <div dangerouslySetInnerHTML={{ __html: marked(this.props.markdown) }} />
            </div>
        );
    }
}

export default Viewer;
