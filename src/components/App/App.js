import React from 'react';
import Editor from '../Editor/Editor';
import Viewer from '../Viewer/Viewer';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markdown: ''
    }
  }

  setMarkdown = (givenMarkdown) => {
    this.setState({ markdown: givenMarkdown });
  }

  render() {
    return (
      <div className="appContainer">
        <h1>Markdown Previewer</h1>

        <div className="mainContainer">
          <Editor setMarkdown={this.setMarkdown} />

          <Viewer markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

export default App;
