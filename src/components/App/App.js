import React from 'react';
import Editor from '../Editor/Editor';
import Viewer from '../Viewer/Viewer';

const App = () => {
  return (
    <div>
      <h1>Markdown Previewer</h1>

      <div className="mainContainer">
        <Editor />
        <Viewer />
      </div>
    </div>
  );
}

export default App;
