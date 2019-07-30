import React from 'react';
import './Editor.css';

class Editor extends React.Component {

    render() {
        return (
            <div className="editor">
                <textarea className="textBox" placeholder="Edit me" onChange={(e) => { this.props.setMarkdown(e.target.value) }} />
            </div>
        )
    }
}

export default Editor;
