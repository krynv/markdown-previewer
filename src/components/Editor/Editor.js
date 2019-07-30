import React from 'react';

class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            markdown: 'Edit ***me***'
        }
    }

    onChange = e => this.setState({
        markdown: e.target.value
    })

    render() {
        return (
            <div className="editor">
                <textarea value={this.state.markdown} onChange={this.onChange} />
            </div>
        )
    }
}

export default Editor;
