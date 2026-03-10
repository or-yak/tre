import './App.css';
// import VerticalPalette from './nodes/VerticalPalette';
import Illustration from './nodes/Illustration';
import ColorTag from './nodes/ColorTag';
import { useState, useEffect } from 'react';
import { randomPalette } from './ColorMethods'


function App() {
  const [colors,setColors] = useState([[230,100,19],[0,100,41],[51,98,52]]);
  const [info, setInfo] = useState(["Press space to activate the generator", " "]);
  const [methodKey, setMethodKey] = useState(0);
  const [isMethodLocked, setIsMethodLocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        const newPalette = isMethodLocked ? randomPalette(methodKey) : randomPalette();
        setColors(newPalette.palette);
        setInfo(newPalette.info);
        setMethodKey(newPalette.key);

      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMethodLocked, methodKey]);   
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
                <h3 className='method-title'>{info[0]}<p onClick={()=>{setIsMethodLocked(!isMethodLocked)}}>{isMethodLocked ? "Locked" : "Lock"}</p></h3>
                <p className='method-info'>{info[1]}</p>
              </div>
          
        </div>
        

    </div>
    </div>
  );
}

export default App;
