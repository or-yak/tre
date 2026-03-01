import './App.css';
import VerticalPalette from './nodes/VerticalPalette';
import Illustration from './nodes/Illustration';
import ColorTag from './nodes/ColorTag';
import { useState } from 'react';

function App() {
  const [colors,setColors] = useState([[230,100,19],[0,100,41],[51,98,52]]);

  return (
    <div className="App">
      <div className='header'>
        <h1 className='tre'>tre</h1>
        <h2 className='info'>The 60-30-10 rule color palette generator<br/> Press 'space' to generate a new palette</h2>
      </div>
        <div className='output-container'>
          <Illustration colors={colors}/>
          <div className='info-container'>
             <div className='color-tags'>
              <ColorTag text="60% - Primary" color={colors[0]}/>    
              <ColorTag text="30% - Support" color={colors[1]}/>    
              <ColorTag text="10% - Accent" color={colors[2]}/>  
              </div>  

              <div className='method-container'>
                <hr/>
                <h3 className='method-title'>Totally Random</h3>
                <p className='method-info'>Lorem ipsum dolor sit amet consectetur. Adipiscing nunc lectus metus odio a facilisis pellentesque. Sodales ipsum vestibulum bibendum elit diam. </p>
              </div>
          
        </div>
        

    </div>
    </div>
  );
}

export default App;
