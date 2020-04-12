import React from 'react';
import './App.css';
import { Builder } from '../Builder/Builder';
import { PreviewContainer } from '../PreviewContainer/PreviewContainer';
import ColorPicker from '../Colorpicker/ColorPicker';

function App() {
  return (
    <div className="App">
      <Builder menuTitles={["Header", "Image", "Content", "CTA", "Footer"]}/>
      <PreviewContainer />
    </div>
  );
}

export default App;
