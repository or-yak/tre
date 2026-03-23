import './App.css';
import Illustration from './nodes/Illustration';
import ColorTag from './nodes/ColorTag';
import { useState, useEffect } from 'react';
import { randomPalette, hslToHex } from './ColorMethods'
import html2canvas from 'html2canvas';


function App() {
  const [colors,setColors] = useState([[230,100,19],[0,100,41],[51,98,52]]);
  const [info, setInfo] = useState(["Press space to activate the generator", " "]);
  const [methodKey, setMethodKey] = useState(0);
  const [isMethodLocked, setIsMethodLocked] = useState(false);
  const [isExportPopupOpen, setIsExportPopupOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault(); 
        if (!isExportPopupOpen) { 
          generateNewPalette();
        }

      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMethodLocked, methodKey, isExportPopupOpen]);   

  const generateNewPalette = () => {
    const newPalette = isMethodLocked ? randomPalette(methodKey) : randomPalette();
    setColors(newPalette.palette);
    setInfo(newPalette.info);
    setMethodKey(newPalette.key);
  }

  const exportAsPNG = (illustrationOnly) => {
    const element = illustrationOnly ? document.querySelector('.export-illustration') : document.querySelector('.export-content');
    html2canvas(element).then(canvas => {
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngFile;
      downloadLink.download = 'tre.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div className="App">
      <div className='header'>
        <h1 className='tre'>tre</h1>
        <h2 className='info'>The 60-30-10 rule color palette generator<span className='computer-instructions'><br/> Press 'space' to generate a new palette</span></h2>
      </div>
        <div className='output-container'>
          <Illustration colors={colors} isExportPopupOpen={false} setIsExportPopupOpen={setIsExportPopupOpen}/> 
          <div className='info-container'>
             <div className='color-tags'>  
              <ColorTag text="60% - Primary" color={colors[0]}/>    
              <ColorTag text="30% - Support" color={colors[1]}/>    
              <ColorTag text="10% - Accent" color={colors[2]}/>  
              </div>  

              <div className='method-container'> 
                <hr/>             
                <h3 className='method-title'>{info[1] === " " ? " " : <span  onClick={()=>{setIsMethodLocked(!isMethodLocked)}}>{isMethodLocked ? <span  class="material-symbols-sharp lock-toggle">lock</span> : <span Class="material-symbols-sharp lock-toggle">lock_open</span>}</span>}{info[0]}</h3>
                <p className='method-info'>{info[1]}</p>
              </div>

              <hr/>
              <p className='contact-info'>tre is a personal project in beta version. If you experience any bugs or have suggestions to improve the app, please contact me at or.jak.design@gmail.com or @400_to_750 on Instagram. (V1.1)</p>
        </div>
    </div>

    <div className='generate-button' onClick={generateNewPalette}>generate</div>

    {isExportPopupOpen && ( // export popup
      <div className='export-popup'>
        <div className='export-content'>
          <div className='export-header '>
        <h1 className='tre tre-export'>tre</h1> 
        <h2 className='export-info'>{hslToHex(colors[0])} {hslToHex(colors[1])} {hslToHex(colors[2])}</h2>
      </div>
          <div className='export-illustration'>
          <Illustration colors={colors} isExportPopupOpen={true} />
          </div>
        </div>
        <div className="popup-buttons">
          <h3 className="popup-button" onClick={() => setIsExportPopupOpen(false)}>Close</h3>
          <h3 className="popup-button" onClick={() => exportAsPNG(false)}>Save Illustration and colors</h3>
          <h3 className="popup-button" onClick={() => exportAsPNG(true)}>Save Illustration Only</h3>
        </div>
      </div>
    ) 
  }
    </div>
  );
}

export default App;
