import './App.css';
import VerticalPalette from './nodes/VerticalPalette';
import Illustration from './nodes/Illustration';
import ColorTag from './nodes/ColorTag';
import { useState } from 'react';

function App() {
  const [colors,setColors] = useState([[230,100,19],[0,100,41],[51,98,52]]);

  return (
    <div className="App">
      <div>
        <h1>tre</h1>
        <h2>The 60-30-10 color rule generator</h2>
        <div className='output-container'>
          <VerticalPalette colors={colors} />
          <Illustration colors={colors}/>
          <div className='info-container'>
            <ColorTag/>
            <ColorTag/>
            <ColorTag/>            
            <h3>Totally Random</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing nunc lectus metus odio a facilisis pellentesque. Sodales ipsum vestibulum bibendum elit diam. </p>
            <button>Generate Palette</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
